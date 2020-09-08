let PasswordValidator = require('../src/password_validator').PasswordValidator;

describe('Password validator', function () {
  // it('contains one character', function () {
  //   let passwordValidator = new PasswordValidator();

  //   let isValid = passwordValidator.isValid('A');

  //   expect(isValid).toBe(false);
  // });

  it('contains less than 9 characters', function () {
    let passwordValidator = new PasswordValidator();

    let isValid = passwordValidator.isValid('A3aAAA_A');

    expect(isValid).toBe(false);
  });

  it('contains at least nine characters', function () {
    let passwordValidator = new PasswordValidator();

    let isValid = passwordValidator.isValid('--a-A_--3');

    expect(isValid).toBe(true);
  });

  it('contains at least 1 capital letter', function () {
    let passwordValidator = new PasswordValidator();

    let isValid = passwordValidator.isValid('-a-a--3--_');

    expect(isValid).toBe(false);
  });

  it('contains at least 1 lowercase', function () {
    let passwordValidator = new PasswordValidator();

    let isValid = passwordValidator.isValid('-A--_--3--');

    expect(isValid).toBe(false);
  });

  it('contains at least 1 number', function () {
    let passwordValidator = new PasswordValidator();

    let isValid = passwordValidator.isValid('-A--_-a---');

    expect(isValid).toBe(false);
  });

  it('contains an underscore', function () {
    let passwordValidator = new PasswordValidator();

    let isValid = passwordValidator.isValid('-A---a-3-');

    expect(isValid).toBe(false);
  });
});
