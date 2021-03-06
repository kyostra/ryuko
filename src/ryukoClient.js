const { Client } = require('sylphy');
const Database = require('./plugins/Database.js');
const pkg = require('../package.json');

class RyukoClient extends Client {
    constructor(options = {}) {
        super(options);
        this.botVersion = `v${pkg.version}`;
        this.ryukoColor = 0x98ffa6;
        this.redColor = 0xff4b4b;
        this.blueColor = 0x99dff;
        this.nsfwColor = 0xffd1dc;
        this.redditColor = 0xcee3f8;
        this.userAgent = `Ryuko (https://github.com/kyostra/ryuko) v(${pkg.version})`;
        this.mongodb = new Database({
            // self host options
            // username: process.env.DB_USERNAME,
            // password: process.env.DB_PASSWORD,
            // host: process.env.DB_HOST,
            // port: process.env.DB_PORT,
            // dbname: process.env.DB_DBNAME
            // atlas options
            username: process.env.DBA_USERNAME,
            password: process.env.DBA_PASSWORD,
            host: process.env.DBA_HOST,
            dbname: process.env.DBA_DBNAME
        });
    }
}

module.exports = RyukoClient;
