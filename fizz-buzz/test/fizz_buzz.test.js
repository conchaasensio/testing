let { FizzBuzz } = require('../src/fizz_buzz');

describe('FizzBuzz', function () {
  let fizzBuzz;
  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
  });

  it('return number 1', function () {
    let numbers = fizzBuzz.getNumbers();

    expect(numbers[0]).toBe(1);
  });

  it('return number 2', function () {
    let numbers = fizzBuzz.getNumbers();

    expect(numbers[1]).toBe(2);
  });

  it('return a number 4', function () {
    let numbers = fizzBuzz.getNumbers();

    expect(numbers[3]).toBe(4);
  });

  it('return an array of 100 numbers', function () {
    let numbers = fizzBuzz.getNumbers();

    expect(numbers.length).toBe(100);
  });

  describe('is fizz when ', () => {
    it('is multiple of 3', function () {
      let numbers = fizzBuzz.getNumbers();

      expect(numbers[2]).toBe('fizz');
      expect(numbers[5]).toBe('fizz');
      expect(numbers[8]).toBe('fizz');
    });

    it('contains 3', function () {
      let numbers = fizzBuzz.getNumbers();

      expect(numbers[12]).toBe('fizz');
      expect(numbers[22]).toBe('fizz');
      expect(numbers[42]).toBe('fizz');
    });
  });

  it('return buzz when is multiple of 5', function () {
    let numbers = fizzBuzz.getNumbers();

    expect(numbers[4]).toBe('buzz');
    expect(numbers[9]).toBe('buzz');
    expect(numbers[19]).toBe('buzz');
  });

  it('return fizzbuzz when is multiple of 15', function () {
    let numbers = fizzBuzz.getNumbers();

    expect(numbers[14]).toBe('fizzbuzz');
    expect(numbers[29]).toBe('fizzbuzz');
    expect(numbers[44]).toBe('fizzbuzz');
  });

  it('return name buzz position 56', function () {
    let numbers = fizzBuzz.getNumbers();

    expect(numbers[55]).toBe('buzz');
  });

  it('return name buzz position 52', function () {
    let numbers = fizzBuzz.getNumbers();

    expect(numbers[51]).toBe('buzz');
  });

  it('return name buzz position 54', function () {
    let numbers = fizzBuzz.getNumbers();

    expect(numbers[53]).toBe('fizzbuzz');
  });

  it('return name fizzbuzz position 35', function () {
    let numbers = fizzBuzz.getNumbers();

    expect(numbers[34]).toBe('fizzbuzz');
  });

  it('return name fizzbuzz position 53', function () {
    let numbers = fizzBuzz.getNumbers();

    expect(numbers[52]).toBe('fizzbuzz');
  });

  it('return name fizzbuzz position 57', function () {
    let numbers = fizzBuzz.getNumbers();

    expect(numbers[56]).toBe('fizzbuzz');
  });
});
