/**
 * Created by derek1117 on 8/12/16.
 */
const expect = require('expect');

const {Users} = require('./users');


describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'D',
            room: 'Node'
        }, {
            id: '2',
            name: 'Ded',
            room: 'React'
        }, {
            id: '3',
            name: 'KK',
            room: 'Node'
        }];
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Derek',
            room: 'Office'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for node course', () => {
        let userList = users.getUserList('Node');

        expect(userList).toEqual(['D', 'KK']);
    });

    it('should return names for react course', () => {
        let userList = users.getUserList('React');

        expect(userList).toEqual(['Ded']);
    });

    it('should remove a user', () => {
        let user = users.removeUser('1');

        expect(user.id).toBe('1');
        expect(users.users.length).toBe(2);

    });

    it('should not remove a user', () => {
        let user = users.removeUser('5');

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        let user = users.getUser('1');

        expect(user.id).toBe('1');
    });

    it('should not find user', () => {
        let user = users.getUser('5');

        expect(user).toNotExist();
    });

});