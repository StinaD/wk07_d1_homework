const PubSub = require('../helpers/pub_sub.js');


const ResultView = function() {

};


ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const primeOutcome = event.detail;
    console.log("anothersilly message");
    this.displayResult(primeOutcome);
  });
};


ResultView.prototype.displayResult = function(primeOutcome) {

  const resultElement = document.querySelector('#result');
  resultElement.textContent = `${primeOutcome}`;
};

module.exports = ResultView;
