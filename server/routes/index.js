module.exports = [
  {
    method: 'POST',
    path: '/mathjs-calculate',
    handler: 'mathjsController.calculate',
    config: {
      policies: []
    }
  }
];
