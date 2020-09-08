let PasswordValidator = require('../src/password_validator').PasswordValidator;

describe('Password validator', function() {
  it('change_this_name', function() {
    let passwordValidator = new PasswordValidator();

    expect(passwordValidator.changeThisName()).toBe(true);
  });
});
