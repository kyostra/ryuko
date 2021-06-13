// const { Client } = require('sylphy');
const RyukoClient = require('./ryukoClient.js');
const chalk = require('chalk');
const { createLogger, format, transports } = require('winston');
const { colorize, combine, timestamp, label, printf } = format;
const moment = require('moment');
const fs = require('fs');
const path = require('path');

global.Promise = require('bluebird');
require('longjohn');
require('dotenv-safe').config({
    path: path.join(process.cwd(), '.env'),
    allowEmptyValues: true
});

const processCount = parseInt(process.env.CLIENT_PROCESSES, 10);
const processID = parseInt(process.env.NODE_APP_INSTANCE, 10) % processCount;
const processShards = parseInt(process.env.CLIENT_SHARDS_PER_PROCESS || 1, 10);
const firstShardID = processID * processShards;
const lastShardID = firstShardID + processShards - 1;
const maxShards = processShards * processCount;

const resolve = (str) => path.join('src', str);

const ryukoFormat = printf((info) => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

const logger = createLogger({
    level: 'silly',
    format: combine(
        colorize(),
        label({ label: processShards > 1 ? `C ${firstShardID}-${lastShardID}` : `C ${processID}` }),
        timestamp(`[${chalk.magenta(moment().format('YYYY MMM Do, h:mm:ss a'))}]`),
        ryukoFormat
    ),
    transports: [new transports.Console()]
});

const ryuko = new RyukoClient({
    token: process.env.CLIENT_TOKEN,
    prefix: process.env.CLIENT_PREFIX,
    admins: process.env.ADMIN_IDS.split(', '),
    modules: resolve('modules'),
    messageLimit: 151,
    getAllUsers: true,
    disableEveryone: false,
    maxShards: maxShards,
    firstShardID: firstShardID,
    lastShardID: lastShardID,
    autoreconnect: true
});

const cmdpath = resolve('commands');
ryuko.unregister('logger', 'console');
ryuko.register('logger', 'winston', logger);
ryuko.unregister('middleware', true);
ryuko.register('middleware', resolve('middleware'));
ryuko.register('commands', cmdpath, { groupedCommands: true });

ryuko.on('ready', () => {
    const shards = ryuko.shards.size;
    const guilds = ryuko.guilds.size;
    const users = ryuko.users.size;

    /* Status types for Discord Bots
    * 0 = Playing
    * 1 = Twitch
    * 2 = Listening to
    * 3 = Watching
    */
    const statuses = [
        { type: 0, name: 'type r.help for help' },
        { type: 3, name: 'you type' },
        { type: 0, name: 'the saxophone' },
        { type: 2, name: 'your voices' },
        { type: 0, name: 'a fun game' },
        { type: 3, name: 'anime' },
        { type: 0, name: 'the piano' },
        { type: 0, name: 'with cute girls' },
        { type: 0, name: 'the violin' },
        { type: 3, name: 'you struggle' },
        { type: 0, name: 'with catgirls' },
        { type: 0, name: `with ${users} users` },
        { type: 2, name: `to ${users} users` },
        { type: 3, name: `${users} users` },
        { type: 0, name: `in ${guilds} servers` },
        { type: 3, name: `${guilds} servers` }
    ];

    ryuko.ascii = () => {
        fs.readFile('./res/boot/ascii.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
        });
    };

    ryuko.ascii();

    ryuko.logger.info(`${chalk.red.bold(ryuko.user.username)} - ${
        firstShardID === lastShardID
        ? `Shard ${firstShardID} is ready!`
        : `Shards ${firstShardID} to ${lastShardID} are ready!`
    }`);

    ryuko.logger.info(
        `Shards: ${chalk.cyan.bold(shards)} | ` +
        `Guilds: ${chalk.cyan.bold(guilds)} | ` +
        `Users: ${chalk.cyan.bold(users)}`
    );

    try {
        ryuko.mongodb.load(ryuko);
    } catch (err) {
        ryuko.logger.error(chalk.red.bold(`[Mongoose]: ${err}`));
    }

    ryuko.logger.info(chalk.yellow.bold(`Prefix: ${ryuko.prefix}`));
    ryuko.logger.info(chalk.green.bold('Ryuko Is Ready To Rumble~!'));

    ryuko.changeStatus = () => {
        const chooseStatus = statuses[~~(Math.random() * statuses.length)];
        ryuko.editStatus({ name: chooseStatus.name, type: chooseStatus.type || 0 });
        ryuko.logger.info(chalk.yellow.bold(`Ryuko's status changed to -"${chooseStatus.name}"`));
    };

    setInterval(() => ryuko.changeStatus(), 120000);
});

ryuko.on('error', ryuko.logger.error);

process.once('SIGINT', () => {
    ryuko.logger.error('Recieved SIGINT');
    if (ryuko) {
        try {
            ryuko.mongodb.destroy();
            ryuko.disconnect();
        } catch (error) {
            ryuko.logger.error(error);
        }
    }
    process.exit(0);
});
process.on('uncaughtException', (err, origin) => {
    ryuko.logger.error('Caught Exception: ', err.stack, 'Exception origin: ', origin);
    process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => reason && ryuko.logger.error('Unhandled Rejection: ', promise, 'reason: ', reason.message));

ryuko.run();
