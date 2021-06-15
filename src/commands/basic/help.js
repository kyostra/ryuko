const { Command } = require('sylphy');

class Help extends Command {
    constructor (...args) {
        super (...args, {
            name: 'help',
            group: 'basic',
            cooldown: 2,
            options: { guildOnly: true },
            usage: [
                { name: 'command', displayName: 'command', type: 'string', optional: true, last: true }
            ]
        });
    }

    handle ({ args, client, msg }, responder) {
        const command = args.command;
        const footerText = `Requested by ${msg.author.username}#${msg.author.discriminator}`;

        if (!command) {
            return responder.send(msg.author.mention, { embed: {
                color: client.ryukoColor,
                title: 'Ryuko, Help!',
                description: 'for further info, do **r.help command_name** (ex. r.help catgirl)',
                author: {
                    name: 'Ryuko',
                    icon_url: client.user.avatarURL
                },
                fields: [{
                    name: 'basic',
                    value: '`about`, `avatar`, `help`, `ping`, `profile`, `role`, `serverinfo`, `setbackground`, `setbio`, `star`, `stats`, `userinfo`, `xpleaderboard`'
                },
                {
                    name: 'currency',
                    value: '`betflip`, `betroll`, `daily`, `give`, `leaderboard`, `reputation`'
                },
                {
                    name: 'fun',
                    value: '`8ball`, `advice`, `aesthetic`, `choose`, `coinflip`, `hug`, `owo`, `ratewaifu`, `urban`'
                },
                {
                    name: 'moderation',
                    value: '`autorole`, `ban`, `census`, `goodbye`, `kick`, `logs`, `mute`, `poll`, `purge`, `setnsfw`, `ssar`, `starboard`, `unmute`, `welcome`'
                },
                {
                    name: 'search',
                    value: '`catgirl`, `osu`, `reddit`'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                } } }).catch(this.logger.error);
        } else if (command === 'about') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for About (basic)',
                description: 'Displays useful information about Ryuko',
                fields: [{
                    name: 'Usage',
                    value: 'r.about',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.about',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 'r.about, r.info',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'avatar') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Avatar (basic)',
                description: 'Gets the avatar of a user',
                fields: [{
                    name: 'Usage',
                    value: 'r.avatar @user or r.avatar',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.avatar @Ryuko or r.avatar',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 'r.avatar, r.profilepicture, r.profilepic',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'help') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Help (basic)',
                description: 'Displays useful information about Ryuko',
                fields: [{
                    name: 'Usage',
                    value: 'r.help or r.help <command name>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.help or r.help ratewaifu',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'ping') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Ping (basic)',
                description: 'Displays the bot\'s ping to Discord servers',
                fields: [{
                    name: 'Usage',
                    value: 'r.ping',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.ping',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'profile') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Profile (basic)',
                description: 'Displays a user\'s profile, bots do not have one because they are not stored in the database',
                fields: [{
                    name: 'Usage',
                    value: 'r.profile\ns.profile @user',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.profile\ns.profile @friend',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'not using a mention will default to the message author\'s profile',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'reputation') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Reputation (currency)',
                description: 'Give someone some reputation',
                fields: [{
                    name: 'Usage',
                    value: 'r.addreputation @user or r.minusreputation',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.+rep @friend or r.-rep @friend',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 'r.addreputation, r.+rep\nr.minusreputation, r.-rep',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'role') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Role (basic)',
                description: 'Adds, removes, and lists roles. Roles above ryuko\'s role are not addable/removeable',
                fields: [{
                    name: 'Usage',
                    value: 'r.role add <role>, r.role remove <role> or r.role list',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.role add nsfw, r.role remove nsfw, r.role list',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'add - tells Ryuko to add the role to you' +
                    '\nremove - tells Ryuko to remove the role from you' +
                    '\nlist - lists all roles available to you',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'star') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Star (basic)',
                description: 'Star a message to the starboard or show a message. You cannot star your own message' +
                '\nYou can also react to messages with the ⭐ emoji to add them to the starboard',
                fields: [{
                    name: 'Usage',
                    value: 'r.star add <message_id>\ns.star show <message_id>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.star add 12312312311',
                    inline: false
                },
                {
                    name: 'Options',
                    value: 'add - adds the given message to the starboard' +
                    '\nshow - shows the given message (good for lazy friends)'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'stats') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Stats (basic)',
                description: 'Displays stats about Ryuko',
                fields: [{
                    name: 'Usage',
                    value: 'r.stats',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.stats',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'serverinfo') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Serverinfo (basic)',
                description: 'Shows info about the server',
                fields: [{
                    name: 'Usage',
                    value: 'r.serverinfo',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.serverinfo',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 'r.serverinfo, r.server',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'setbackground') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for SetBackground (basic)',
                description: 'Sets the background for your profile',
                fields: [{
                    name: 'Usage',
                    value: 'r.setbackground <background>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.setbackground whitemarble',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'To reset your bio do `r.setbio -reset`' +
                    '\nBackgrounds: `default`, `whitemarble`, `blackmarble`',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'setbio') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for SetBio (basic)',
                description: 'Sets the bio for your profile',
                fields: [{
                    name: 'Usage',
                    value: 'r.setbio <bio text>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.setbio I am not a weeb',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'To reset your bio do `r.setbio -reset`',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'userinfo') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Userinfo (basic)',
                description: 'Shows info about a user',
                fields: [{
                    name: 'Usage',
                    value: 'r.userinfo, r.userinfo @user or r.userinfo <user_id>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.userinfo, r.userinfo @Ryuko or r.userinfo 12345678910111213141',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 'r.userinfo, r.user',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'xpleaderboard') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for XP Leaderboard (basic)',
                description: 'Shows the Top 10 members in the server for XP',
                fields: [{
                    name: 'Usage',
                    value: 'r.xpleaderboard',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.xpleaderboard',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 'r.xpleaderboard, r.xplb',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'betflip') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for BetFlip (currency)',
                description: 'Bet money, flip a coin, win or lose money',
                fields: [{
                    name: 'Usage',
                    value: 'r.betflip <amount> <heads/tails/h/t>, r.bf <amount> <heads/tails/h/t>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.betflip 100 h, r.bf 100 tails',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 'r.betflip, r.bf',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'betroll') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for BetRoll (currency)',
                description: 'Bet money, roll from 0-100, win or lose money',
                fields: [{
                    name: 'Usage',
                    value: 'r.betroll <amount>, r.br <amount>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.betroll 100, r.br 100',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 'r.betroll, r.br',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'daily') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Daily (currency)',
                description: 'Get your Universal Basic Income for the day',
                fields: [{
                    name: 'Usage',
                    value: 'r.daily',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.daily',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'give') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Give (currency)',
                description: 'Give someone some money',
                fields: [{
                    name: 'Usage',
                    value: 'r.give <amount> <user>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.give 100 @User, r.give 100 12345678910111213141',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'leaderboard') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Leaderboard (currency)',
                description: 'Shows the Top 10 members in the server for curency',
                fields: [{
                    name: 'Usage',
                    value: 'r.leaderboard',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.leaderboard',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 'r.leaderboard, r.lb',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === '8ball') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for 8ball (fun)',
                description: 'Ask a question and get an answer back',
                fields: [{
                    name: 'Usage',
                    value: 'r.8ball <question>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.8ball am i a weeb?',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'advice') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Advice (fun)',
                description: 'Gives you advice',
                fields: [{
                    name: 'Usage',
                    value: 'r.advice',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.advice',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'aesthetic') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Aesthetic (fun)',
                description: 'makes your text more a e s t h e t ic',
                fields: [{
                    name: 'Usage',
                    value: 'r.aesthetic <phrase>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.aesthetic i have no life',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'choose') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Choose (fun)',
                description: 'Chooses a random word/phrase given',
                fields: [{
                    name: 'Usage',
                    value: 'r.choose <word/phrase>, <word/phrase>...',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.choose pizza, poutine, koreanbbq',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'coinflip') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Coinflip (fun)',
                description: 'Flips a coin',
                fields: [{
                    name: 'Usage',
                    value: 'r.coinflip or r.coinflip <guess>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.coinflip or r.coinflip heads',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'hug') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Hug (fun)',
                description: 'Hug a fellow user~',
                fields: [{
                    name: 'Usage',
                    value: 'r.hug @user',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.hug @Ryuko',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'owo') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Owo (fun)',
                description: 'makes your text owo uwu, add "!" adds a face',
                fields: [{
                    name: 'Usage',
                    value: 'r.owo <phrase>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.owo catgirls are for degenerates!',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 'r.owo, r.uwu',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'ratewaifu') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for RateWaifu (fun)',
                description: 'Rate a fellow waifu~',
                fields: [{
                    name: 'Usage',
                    value: 'r.ratewaifu @user',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.ratewaifu @Ryuko',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'urban') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Urban (fun)',
                description: 'Searches the Urban Dictionary or give a random word',
                fields: [{
                    name: 'Usage',
                    value: 'r.urban <word> or r.urban',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.urban eGirl or r.urban',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'autorole') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for AutoRole (moderation)',
                description: '[USERS WITH MANAGE ROLES PERMISSION] Sets the auto-role for new members',
                fields: [{
                    name: 'Usage',
                    value: 'r.autorole <options> <role>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.autorole add Member\ns.autorole remove',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'add - sets the role to give automatically' +
                    '\nremove - turns off autorole',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'ban') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Ban (moderation)',
                description: '[USERS WITH BAN PERMISSION] Bans a member from the server and set days worth of messages to delete (Default is 0)',
                fields: [{
                    name: 'Usage',
                    value: 'r.ban @member <days_msg> <reason>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.ban @RandomTroll 7 being a spam bot',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'days_msg - (optional) how many days of messages to delete from them' +
                    '\nreason - (optional) why you banned them',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'census') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Census (moderation)',
                description: '[USERS WITH ADMINISTRATOR PERMISSION] Updates the database manually, usually this is all automatic, only do this if the bot was offline',
                fields: [{
                    name: 'Usage',
                    value: 'r.census <option>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.census guild\ns.census members',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'guild - updates the guild name in the database' +
                    '\nmembers - updates all members username + discriminator database entry',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'goodbye') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Goodbye (moderation)',
                description: '[USERS WITH MANAGE CHANNELS PERMISSION] Sets the channel for goodbye messages',
                fields: [{
                    name: 'Usage',
                    value: 'r.goodbye (a prompt will appear)',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.goodbye',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'kick') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Kick (moderation)',
                description: '[USERS WITH KICK PERMISSION] Kicks a member from the server',
                fields: [{
                    name: 'Usage',
                    value: 'r.kick @member <reason>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.kick @RandomTroll being a spam bot',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'reason - (optional) why you kicked them',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'logs') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Logs (moderation)',
                description: '[USERS WITH MANAGE CHANNELS PERMISSION] Sets the channel for logs',
                fields: [{
                    name: 'Usage',
                    value: 'r.logs on\ns.logs off',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.logs on\ns.logs off',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'on - sets the current channel for logs' +
                    '\noff - turns off sending logs in that channel',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'mute') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Mute (moderation)',
                description: '[USERS WITH MUTE MEMBERS PERMISSION] mute a member',
                fields: [{
                    name: 'Usage',
                    value: 'r.mute @member <options>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.mute @RandomTroll full',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 'r.mute, r.gag',
                    inline: false
                },
                {
                    name: 'Extra Args - Options',
                    value: 'text - (default) gives them a role that doesnt allow message sending' +
                    '\nvoice - mutes them from speaking in voice channels' +
                    '\nfull - mutes them from text and voice',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'unmute') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Unmute (moderation)',
                description: '[USERS WITH MUTE MEMBERS PERMISSION] unmute a member',
                fields: [{
                    name: 'Usage',
                    value: 'r.unmute @member <options>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.unmute @RandomTroll full',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 'r.unmute, r.ungag',
                    inline: false
                },
                {
                    name: 'Extra Args - Options',
                    value: 'text - (default) removes the mute role that doesnt allow message sending' +
                    '\nvoice - unmutes them from voice channels' +
                    '\nfull - unmutes them from text and voice',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'poll') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Poll (moderation)',
                description: '[USERS WITH MANAGE MESSAGES PERMISSION] Cast a poll for members',
                fields: [{
                    name: 'Usage',
                    value: 'r.poll <topic/message>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.poll Should we add more roles?',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'purge') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Purge (moderation)',
                description: '[USERS WITH MANAGE MESSAGES PERMISSION] Deletes a set amount of messages in a channel',
                fields: [{
                    name: 'Usage',
                    value: 'r.purge <number> <filter>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.purge 10, r.purge 10 @TrollUser, r.purge 5 owo',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 'r.purge, r.clear, r.delete',
                    inline: false
                },
                {
                    name: 'Filters',
                    value: '<word> - any phrase/word specified after the message count will only be deleted' +
                    '\nbots - deletes messages made by a bot' +
                    '\ncommands - deletes messages with the r. prefix' +
                    '\n@user - deletes messages from that user' +
                    '\nunpinned - messages that are pinned wont be deleted',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'setnsfw') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for SetNSFW (moderation)',
                description: '[USERS WITH MANAGE CHANNELS PERMISSION] Changes a channel to enable NSFW content, also "nsfw" cant be the first part of the channel name or it wont add the warning, blame discord. ie - "nsfw-bot-spam"',
                fields: [{
                    name: 'Usage',
                    value: 'r.setnsfw on\ns.setnsfw off',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.setnsfw on\ns.setnsfw off',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'off - takes away the nsfw label, nsfw content not allowed' +
                    '\non - adds the nsfw label, nsfw content allowed',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'ssar') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Ssar (moderation)',
                description: '[USERS WITH MANAGE ROLES PERMISSION] Adds a role to the database for assignability',
                fields: [{
                    name: 'Usage',
                    value: 'r.ssar add <rolename>\ns.ssar remove <rolename>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.ssar add nsfw\ns.ssar remove nsfw',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'add - adds the role to the bots database for assignability' +
                    '\nremove - removes the role from the bots database, making it unable to assign the role',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'starboard') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Logs (moderation)',
                description: '[USERS WITH MANAGE CHANNELS PERMISSION] Sets the channel as the starboard',
                fields: [{
                    name: 'Usage',
                    value: 'r.starbord on\ns.starbord off',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.starbord on\ns.starbord off',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'on - sets the current channel as the starboard' +
                    '\noff - turns off the channel being the starboard',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'welcome') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Welcome (moderation)',
                description: '[USERS WITH MANAGE CHANNELS PERMISSION] Sets the channel for welcome messages',
                fields: [{
                    name: 'Usage',
                    value: 'r.welcome (a prompt will appear)',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.welcome',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'catgirl') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Catgirl (search)',
                description: 'Sends an image of a catgirl',
                fields: [{
                    name: 'Usage',
                    value: 'r.catgirl or r.catgirl nsfw',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.catgirl or r.catgirl nsfw',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'nsfw - tells Ryuko to search for lewd Catgirls',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'osu') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Osu (search)',
                description: 'Displays Osu profile info and stats',
                fields: [{
                    name: 'Usage',
                    value: 'r.osu <searchtype> <user>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.osu cookiezi\ns.osu profile cookiezi',
                    inline: false
                },
                {
                    name: 'Search Types',
                    value: '<none>, profile, best, recent',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'reddit') {
            return responder.send(' ', { embed: {
                color: client.ryukoColor,
                title: 'Help for Reddit (search)',
                description: 'Posts the first 5 threads on the frontpage or specified subreddit',
                fields: [{
                    name: 'Usage',
                    value: 'r.reddit <searchtype>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 'r.reddit\ns.reddit frontpage\ns.reddit leagueoflegends',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.dynamicAvatarURL(),
                    text: footerText
                }
            } }).catch(this.logger.error);
        }
    }
}

module.exports = Help;
