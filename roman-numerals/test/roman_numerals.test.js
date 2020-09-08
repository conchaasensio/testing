let { RomanNumerals } = require('../src/roman_numerals');

describe('RomanNumerals', function () {
  let romanNumerals;

  beforeEach(() => {
    romanNumerals = new RomanNumerals();
  });

  it('convert number 1 to Roman Numeral', function () {
    let number = romanNumerals.convert(1);

    expect(number).toBe('I');
  });

  it('convert number 5 to Roman Numeral', function () {
    let number = romanNumerals.convert(5);

    expect(number).toBe('V');
  });

  it('convert number 10 to Roman Numeral', function () {
    let number = romanNumerals.convert(10);

    expect(number).toBe('X');
  });

  it('convert number 50 to Roman Numeral', function () {
    let number = romanNumerals.convert(50);

    expect(number).toBe('L');
  });

  it('convert number 100 to Roman Numeral', function () {
    let number = romanNumerals.convert(100);

    expect(number).toBe('C');
  });

  it('convert number 500 to Roman Numeral', function () {
    let number = romanNumerals.convert(500);

    expect(number).toBe('D');
  });

  it('convert number 1000 to Roman Numeral', function () {
    let number = romanNumerals.convert(1000);

    expect(number).toBe('M');
  });

  it('convert number 2 to Roman Numeral', function () {
    let number = romanNumerals.convert(2);

    expect(number).toBe('II');
  });

  it('convert number 3 to Roman Numeral', function () {
    let number = romanNumerals.convert(3);

    expect(number).toBe('III');
  });

  it('convert number 6 to Roman Numeral', function () {
    let number = romanNumerals.convert(6);

    expect(number).toBe('VI');
  });

  it('convert number 7 to Roman Numeral', function () {
    let number = romanNumerals.convert(7);

    expect(number).toBe('VII');
  });

  it('convert number 8 to Roman Numeral', function () {
    let number = romanNumerals.convert(8);

    expect(number).toBe('VIII');
  });

  it('convert number 11 to Roman Numeral', function () {
    let number = romanNumerals.convert(11);

    expect(number).toBe('XI');
  });

  it('convert number 12 to Roman Numeral', function () {
    let number = romanNumerals.convert(12);

    expect(number).toBe('XII');
  });

  it('convert number 13 to Roman Numeral', function () {
    let number = romanNumerals.convert(13);

    expect(number).toBe('XIII');
  });

  it('convert number 23 to Roman Numeral', function () {
    let number = romanNumerals.convert(23);

    expect(number).toBe('XXIII');
  });

  it('convert number 51 to Roman Numeral', function () {
    let number = romanNumerals.convert(51);

    expect(number).toBe('LI');
  });

  it('convert number 101 to Roman Numeral', function () {
    let number = romanNumerals.convert(101);

    expect(number).toBe('CI');
  });

  it('convert number 501 to Roman Numeral', function () {
    let number = romanNumerals.convert(501);

    expect(number).toBe('DI');
  });

  it('convert number 1001 to Roman Numeral', function () {
    let number = romanNumerals.convert(1001);

    expect(number).toBe('MI');
  });
});
