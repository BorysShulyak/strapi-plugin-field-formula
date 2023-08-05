module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: []
    }
  },
  {
    method: 'POST',
    path: '/mathjs-calculate',
    handler: 'mathjsController.calculate',
    config: {
      policies: []
    }
  }
];
