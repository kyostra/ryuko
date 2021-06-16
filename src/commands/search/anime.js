const { Command } = require('sylphy');
const malScraper = require('mal-scraper');

class Anime extends Command {
    constructor (...args) {
        super (...args, {
            name: 'anime',
            group: 'search',
            cooldown: 5,
            options: { guildOnly: true },
            usage: [
                { name: 'name', displayName: 'name', type: 'string', optional: true, last: true }
            ]
        });
    }

    handle ({ args, client, msg }, responder) {
        const name = args.name;
        const mal = malScraper.search;

        client.sendChannelTyping(msg.channel.id);
        mal.search('anime', {
            maxResults: 1,
            term: name
        }).then((data) => {
            return responder.send(' ', { embed: {
                author: {
                    name: data[0].title,
                    url: data[0].url,
                    icon_url: 'https://pbs.twimg.com/profile_images/1190380284295950339/Py6XnxvH_400x400.jpg'
                },
                color: client.ryukoColor,
                thumbnail: {
                    url: data[0].thumbnail
                },
                description: data[0].shortDescription,
                fields: [{
                    name: 'Episodes',
                    value: data[0].nbEps !== '-' ? data[0].nbEps : 'Ongoing',
                    inline: true
                },
                {
                    name: 'Average Score',
                    value: data[0].score,
                    inline: true
                },
                {
                    name: 'Type',
                    value: data[0].type,
                    inline: true
                },
                {
                    name: 'Rating',
                    value: data[0].rating,
                    inline: true
                },
                {
                    name: 'Start Date',
                    value: data[0].startDate,
                    inline: true
                },
                {
                    name: 'End Date',
                    value: data[0].endDate !== '-' ? data[0].endDate : 'Airing',
                    inline: true
                }],
                timestamp: new Date()
            } }).catch(this.logger.error);
        }).catch((err) => this.logger.error(err));
    }
}

module.exports = Anime;
