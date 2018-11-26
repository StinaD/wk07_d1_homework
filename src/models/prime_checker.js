const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function () {
};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    const result = this.checkPrimeNumber(inputtedNumber);
    PubSub.publish('PrimeChecker:result-calculated', result);
  });
};


PrimeChecker.prototype.checkPrimeNumber = function (number) {
  if (number <= 1) {
    return `No, ${number} is not a prime number.`;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return `No, ${number} is not a prime number`;
    }
  }
  return `Yes! ${number} is a prime number!`;
};




module.exports = PrimeChecker;
