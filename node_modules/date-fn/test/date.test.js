const { date } = require('../router');
let date_ =  "1991-08-28 13:10:10";


test('code101', () => expect(date(date_, 101)).toBe('08/28/91') );

test('code102', () => expect(date(date_, 102)).toBe('08/28/1991') );

test('code103', () => expect(date(date_, 103)).toBe('08/1991/28') );

test('code104', () => expect(date(date_, 104)).toBe('28/08/1991') );

test('code105', () => expect(date(date_, 105)).toBe('28/1991/08') );

test('code106', () => expect(date(date_, 106)).toBe('1991/08/28') );

test('code107', () => expect(date(date_, 107)).toBe('1991/28/08') );

test('code108', () => expect(date(date_, 108)).toBe('Wed Aug 28 1991') );

test('code109', () => expect(date(date_, 109)).toBe('28 Aug 1991') );

test('code110', () => expect(date(date_, 110)).toBe('Aug 28, 1991') );

test('code111', () => expect(date(date_, 111)).toBe('19910828') );
