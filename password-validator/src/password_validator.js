class PasswordValidator {
  isValid(password) {
    return (
      this.hasMoreThan8Characters(password) &&
      this.containsACapitalLetter(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[_]/.test(password)
    );
  }
  containsACapitalLetter(password) {
    return /[A-Z]/.test(password);
  }
  hasMoreThan8Characters(password) {
    return password.length > 8;
  }
}

module.exports.PasswordValidator = PasswordValidator;
