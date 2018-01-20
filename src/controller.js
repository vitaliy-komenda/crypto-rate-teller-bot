const net = require('./net');
const Telegraf = require('telegraf');
const log = require('lambda-log');
const rate = require('./binds/rate');

const currencies = process.env.CURRENCIES.split(' ');

export const handle = (token, body) => {
    const bot = new Telegraf(token);

    require('./binds/hi').default(bot);
    require('./binds/help').default(bot);
    rate.default(
        bot,
        log,
        net.proccesRate,
        currencies
    );
    require('./binds/inline-query').default(
        bot,
        log,
        net.proccesRate,
        currencies
    );

    bot.handleUpdate(JSON.parse(body));
};
