/**
 * Created by derek1117 on 8/12/16.
 */
const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', () => {
   it('should generate correct message object', () => {
       let from = 'Jen';
       let text = 'Some message';
       let message = generateMessage(from, text);

       expect(message.createAt).toBeA('number');
       expect(message).toInclude({from, text});
   }) ;
});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        let from = 'Jen';
        let latitude = 15;
        let longitude = 20;
        let message = generateLocationMessage(from, latitude, longitude);
        let url = 'https://www.google.com/maps?q=15,20';

        expect(message.createAt).toBeA('number');
        expect(message).toInclude({from, url});
    }) ;
});