/**
 * Created by derek1117 on 8/12/16.
 */
const moment = require('moment');

const generateMessage = (from, text) => {
    return {
        from,
        text,
        createAt: moment().valueOf()
    };
};

const generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createAt: moment().valueOf()
};
};

module.exports = {generateMessage, generateLocationMessage};