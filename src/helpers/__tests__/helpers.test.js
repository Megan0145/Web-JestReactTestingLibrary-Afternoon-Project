import * as helpers from '../helpers';

jest.mock('uuid', () => {
  return () => '123';
});

describe('sum', () => {
  it('returns null if fed no arguments', () => {
    expect(helpers.sum()).toBe(null);
  });
  it('returns null if fed a single argument', () => {
    expect(helpers.sum(1)).toBe(null);
  });
  it('adds positive number correctly', () => {
    expect(helpers.sum(1, 1)).toBe(2);
  });
  it('adds negative number correctly', () => {
    expect(helpers.sum(-1, -1)).toBe(-2);
  });
  it('throws if fed something which is not a number', () => {
    expect(() => helpers.sum('1', '2')).toThrow();
  });
  it('can add three positive numbers', () => {
    expect(helpers.sum(1, 2, 3)).toBe(6);
    expect(helpers.sum(1, 2, 3)).not.toBe(7);
  });
});

describe('multiply', () => {
  // write tests! <================================================
  it('multiplies positive nums correctly', () => {
    expect(helpers.multiply(2,2)).toBe(4);
  });
  it('multiplies negative nums correctly', () => {
    expect(helpers.multiply(-2,2)).toBe(-4);
    expect(helpers.multiply(-2, -2)).toBe(4);
  });
  it('returns null if fed no arguments/ fed only one argument', () => {
    expect(helpers.multiply()).toBe(null);
    expect(helpers.multiply(1)).toBe(null);
  });
  it('throws if args not of type num', () => {
    expect(() => helpers.multiply('1', '2')).toThrow();
  });
  it('returns correct result if num args > 2', () => {
    expect(helpers.multiply(2,2,2)).toBe(8);
  })
});

describe('personMaker', () => {
  it('makes a person with name and age', () => {
    expect(helpers.personMaker('peter', 32))
      .toMatchObject({
        id: '123',
        name: 'peter',
        age: 32,
      });
    });
   it('expects name arg to be a string', () => {
    expect(() => helpers.personMaker(4, 19)).toThrow();
   });
   it('expects age arg to be a number', () => {
    expect(() => helpers.personMaker('Peter', '4')).toThrow();
   });
   it('expects age arg to be > 18', () => {
    expect(() => helpers.personMaker('Peter', 4)).toThrow();
   })

  // write more tests! <===========================================
});
