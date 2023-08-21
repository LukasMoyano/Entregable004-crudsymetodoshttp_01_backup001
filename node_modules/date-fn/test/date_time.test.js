const { date } = require('../router');
let date_ =  "1991-08-28 13:10:10";

test('code143', () => expect(date(date_, 143)).toBe('1991/08/28 1:10:10 PM') );

test('code144', () => expect(date(date_, 144)).toBe('1991/08/28 13:10:10') );

test('code145', () => expect(date(date_, 145)).toBe('1991/08/28 1:10 PM') );

test('code146', () => expect(date(date_, 146)).toBe('1991/08/28 13:10') );

test('code147', () => expect(date(date_, 147)).toBe('1991/28/08 1:10:10 PM') );

test('code148', () => expect(date(date_, 148)).toBe('1991/28/08 13:10:10') );

test('code149', () => expect(date(date_, 149)).toBe('1991/28/08 1:10 PM') );

test('code150', () => expect(date(date_, 150)).toBe('1991/28/08 13:10') );

test('code151', () => expect(date(date_, 151)).toBe('08/28/91 1:10:10 PM') );

test('code152', () => expect(date(date_, 152)).toBe('08/28/91 13:10:10') );

test('code153', () => expect(date(date_, 153)).toBe('08/28/91 1:10 PM') );

test('code154', () => expect(date(date_, 154)).toBe('08/28/91 13:10') );

test('code155', () => expect(date(date_, 155)).toBe('08/28/1991 1:10:10 PM') );

test('code156', () => expect(date(date_, 156)).toBe('08/28/1991 13:10:10') );

test('code157', () => expect(date(date_, 157)).toBe('08/28/1991 1:10 PM') );

test('code158', () => expect(date(date_, 158)).toBe('08/28/1991 13:10') );

test('code159', () => expect(date(date_, 159)).toBe('08/1991/28 1:10:10 PM') );

test('code160', () => expect(date(date_, 160)).toBe('08/1991/28 13:10:10') );

test('code161', () => expect(date(date_, 161)).toBe('08/1991/28 1:10 PM') );

test('code162', () => expect(date(date_, 162)).toBe('08/1991/28 13:10') );

test('code163', () => expect(date(date_, 163)).toBe('28/08/1991 1:10:10 PM') );

test('code164', () => expect(date(date_, 164)).toBe('28/08/1991 13:10:10') );

test('code165', () => expect(date(date_, 165)).toBe('28/08/1991 1:10 PM') );

test('code166', () => expect(date(date_, 166)).toBe('28/08/1991 13:10') );

test('code167', () => expect(date(date_, 167)).toBe('28/1991/08 1:10:10 PM') );

test('code168', () => expect(date(date_, 168)).toBe('28/1991/08 13:10:10') );

test('code169', () => expect(date(date_, 169)).toBe('28/1991/08 1:10 PM') );

test('code170', () => expect(date(date_, 170)).toBe('28/1991/08 13:10') );

test('code171', () => expect(date(date_, 171)).toBe('28 Aug 1991 1:10:10 PM') );

test('code172', () => expect(date(date_, 172)).toBe('28 Aug 1991 13:10:10') );

test('code173', () => expect(date(date_, 173)).toBe('28 Aug 1991 1:10 PM') );

test('code174', () => expect(date(date_, 174)).toBe('28 Aug 1991 13:10') );

test('code175', () => expect(date(date_, 175)).toBe('Wed Aug 28 1991 1:10:10 PM') );

test('code176', () => expect(date(date_, 176)).toBe('Wed Aug 28 1991 13:10:10') );

test('code177', () => expect(date(date_, 177)).toBe('Wed Aug 28 1991 1:10 PM') );

test('code178', () => expect(date(date_, 178)).toBe('Wed Aug 28 1991 13:10') );

// test('code179', () => expect(date(date_, 179)).toBe('') );
