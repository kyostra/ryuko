const { Command } = require('sylphy');
const pkg = require('../../../package.json');

class About extends Command {
    constructor (...args) {
        super (...args, {
            name: 'about',
            group: 'basic',
            aliases: ['info'],
            cooldown: 2,
            options: { guildOnly: true }
        });
    }

    handle ({ client }, responder) {
        const owner = client.users.get(process.env.OWNER_ID);

        return responder.send(' ', { embed: {
            title: 'Ryuko, About~',
            description: 'Hello! I\'m Ryuko, a general purpose discord bot. I started out as a small project to learn JavaScript.',
            color: client.ryukoColor,
            thumbnail: {
                url: client.user.avatarURL
            },
            fields: [{
                name: 'Developed By',
                value: 'kyostra (github)',
                inline: false
            },
            {
                name: 'Ryuko',
                value: `Version - ${client.botVersion}` +
                '\nLanguage - JavaScript + Node.js',
                inline: false
            },
            {
                name: 'Useful Links',
                value: '[Github](https://github.com/kyostra/ryuko)',
                inline: true
            },
            {
                name: 'Built With',
                value: `[Eris - ${pkg.dependencies.eris}](https://github.com/abalabahaha/eris)` +
                `\n[Sylphy - ${pkg.dependencies.sylphy}](https://github.com/pyraxo/sylphy)`,
                inline: true
            }],
            timestamp: new Date(),
            footer: {
                icon_url: owner.avatarURL,
                text: 'Ryuko © 2017 | All Rights Reserved'
            }
        } }).catch(this.logger.error);
    }
}

module.exports = About;
