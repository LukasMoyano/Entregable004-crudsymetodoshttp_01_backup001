const { date } = require('../router');
let date_ =  "1991-08-28 13:10:10";

test('code5', () => expect(date(date_, 5)).toBe('1:10:10 PM') );

test('code6', () => expect(date(date_, 6)).toBe('13:10:10') );

test('code7', () => expect(date(date_, 7)).toBe('1:10 PM') );

test('code8', () => expect(date(date_, 8)).toBe('13:10') );
