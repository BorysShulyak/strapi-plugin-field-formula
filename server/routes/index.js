module.exports = [
  {
    method: 'POST',
    path: '/calculate',
    handler: 'mathjsController.calculate',
    config: {
      policies: []
    }
  }
];
