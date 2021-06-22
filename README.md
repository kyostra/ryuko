<h1 align="center">Ryuko 流子</h1>
<h3 align="center">A general purpose Discord bot</h3>
<p align="center">
    <a title="TravisCI" href="https://travis-ci.org/kyostra/ryuko"><img src="https://img.shields.io/travis/kyostra/ryuko.svg?style=flat" alt="TravisCI" /></a>
    <a title="DavidDM" href="https://david-dm.org/kyostra/ryuko"><img src="https://img.shields.io/david/kyostra/ryuko.svg?style=flat" alt="DavidDM" /></a>
    <a title="license" href="https://github.com/kyostra/ryuko/blob/master/LICENSE"><img src="https://img.shields.io/github/license/kyostra/ryuko.svg" alt="License" /></a>
</p>

Ryuko is a discord bot created in JavaScript (Node.js). It is currently a project of mine to learn JavaScript and other developer tools. This bot was initially written with the library [Discord.js](https://github.com/discordjs/discord.js) and using [Discord-Akairo](https://github.com/discord-akairo/discord-akairo) as the framework. Though I re-coded the whole project after experimenting with another library and framework called [Eris](https://github.com/abalabahaha/eris) and [Sylphy](https://github.com/pyraxo/sylphy) respectively. This is just a for fun personal project.

## Ryuko is built on...
* [Node.js](https://nodejs.org/en/) : Javascript runtime
* [NPM](https://www.npmjs.com/) : Package manager for Node.js
* [Eris](https://github.com/abalabahaha/eris) : Discord JavaScript Library for Node.js
* [Sylphy](https://github.com/pyraxo/sylphy) : Framework for Eris
* [ESLint](https://eslint.org) : Configurable JavaScript linter tool
* [PM2](https://pm2.keymetrics.io/) : Process manager for applications in production
* [MongoDB](https://www.mongodb.com/) : Database for modern applications

## Setup :
For `.env` and `.env.example`, leave the values empty for the example file (you need both files).
* You do not need both Self Host and Atlas values filled in, you can just pick one.
* Both Self Hosting and Atlas are free (depending on the Atlas tier used), but Atlas is cloud based.
```env
# Bot configuration

# Bot Masterkeys
CLIENT_TOKEN=
CLIENT_PREFIX=
OWNER_ID=
ADMIN_IDS=

# Sharding
CLIENT_PROCESSES=
CLIENT_SHARDS_PER_PROCESS=

# Module Keys
HOME_ID=
GUILDJOINLOG_ID=
GUILDLEAVELOG_ID=

# MongoDB Self Host
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DBNAME=

# MongoDB Atlas
DBA_HOST=
DBA_USERNAME=
DBA_PASSWORD=
DBA_DBNAME=

# API
API_OSU=
API_REDDIT_ID=
API_REDDIT_SECRET=
API_REDDIT_REFRESH=
API_REDDIT_ACCESS=
```

Don't forget to un-comment the specified URI you are using and comment the one you aren't in `src/plugins/Database.js`.
```js
class Database {
    constructor(options={}) {
        // self host uri
        // this.URI = `mongodb://${options.username}:${options.password}@${options.host}:${options.port}/${options.dbname}`;
        // atlas host uri
        this.URI = `mongodb+srv://${options.username}:${options.password}@${options.host}/${options.dbname}`;
        this.models = { roles: RoleModel, users: UserModel, guilds: GuildModel };
        this.cache = { roles: {}, users: {}, guilds: {} };
    }
}
```

### Running the bot :
After setting up the env files, configure the `pm2-master.json` and `pm2-ryuko.json` files to your liking. You need to run both files together.

```
$ pm2 start pm2-master.json
$ pm2 start pm2-ryuko.json
$ pm2 logs
```

## License/Author
**Ryuko** © [kyostra](https://github.com/kyostra), Released under the [AGPL-3.0 License](https://github.com/kyostra/ryuko/blob/master/LICENSE)

Created and maintained by kyostra.
