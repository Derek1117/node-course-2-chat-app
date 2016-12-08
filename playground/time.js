/**
 * Created by derek1117 on 8/12/16.
 */
const moment = require('moment');

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

var createAt = 1234;
var date = new moment(createAt);
console.log(date.format('MMM Do YYYY h:mm a'));