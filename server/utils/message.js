/**
 * Created by derek1117 on 8/12/16.
 */
const generateMessage = (from, text) => {
    return {
        from,
        text,
        createAt: new Date().getTime()
    };
};

module.exports = {generateMessage};