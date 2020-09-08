class FizzBuzz {
  getNumbers() {
    let numbers = [];
    for (let index = 1; index < 101; index++) {
      const fizzValue = this.calculateFizzValue(index);
      numbers.push(fizzValue);
    }

    return numbers;
  }

  calculateFizzValue(index) {
    if (this.isFizz(index) && this.isBuzz(index)) {
      return 'fizzbuzz';
    } else if (this.isFizz(index)) {
      return 'fizz';
    } else if (this.isBuzz(index)) {
      return 'buzz';
    } else {
      return index;
    }
  }

  isBuzz(index) {
    return index % 5 === 0 || this.contain5(index);
  }

  isFizz(index) {
    return index % 3 === 0 || this.contain3(index);
  }

  contain5(index) {
    return index.toString().includes('5');
  }

  contain3(index) {
    return index.toString().includes('3');
  }
}

module.exports.FizzBuzz = FizzBuzz;
