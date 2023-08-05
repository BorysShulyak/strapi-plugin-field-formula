'use strict';

const mathjs = require('mathjs');

module.exports = () => ({
  async calculate(formula, scope) {
    try {
      return mathjs.evaluate(formula, scope);
    } catch (err) {
      console.log('mathjsService.calculate Error: ', err.response);
      return '';
    }
  }
});
