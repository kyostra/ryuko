const Mongoose = require('mongoose');
const chalk = require('chalk');

const RoleModel = require('../models/Role.js');
const UserModel = require('../models/User.js');
const GuildModel = require('../models/Guild.js');

class Database {
    constructor(options={}) {
        // self host uri
        // this.URI = `mongodb://${options.username}:${options.password}@${options.host}:${options.port}/${options.dbname}`;
        // atlas host uri
        this.URI = `mongodb+srv://${options.username}:${options.password}@${options.host}/${options.dbname}`;
        this.models = { roles: RoleModel, users: UserModel, guilds: GuildModel };
        this.cache = { roles: {}, users: {}, guilds: {} };
    }

    load(ryuko) {
        return new Promise((resolve, reject) => {
            this.ryuko = ryuko;
            Mongoose.Promise = global.Promise;
            Mongoose.connect(this.URI, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }).catch((error) => {
                return reject(error);
            });
            Mongoose.connection.on('error', (error) => this.ryuko.logger.error(chalk.red.bold(`[DB] Mongoose error: ${error}`)));
            Mongoose.connection.once('open', () => this.ryuko.logger.info(chalk.green.bold('[DB] Mongoose Connected')));
            return resolve(this);
        });
    }

    destroy() {
        return new Promise((resolve, reject) => {
            this.ryuko = undefined;
            Mongoose.disconnect().catch((error) => {
                return reject(error);
            });
            Mongoose.connection.removeAllListeners('error');
            Mongoose.connection.removeAllListeners('open');
            return resolve();
        });
    }
}

module.exports = Database;
