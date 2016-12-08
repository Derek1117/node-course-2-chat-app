/**
 * Created by derek1117 on 8/12/16.
 */
const isRealString = (str) => {
    return typeof str === 'string' && str.trim().length > 0;
};


module.exports = {isRealString};