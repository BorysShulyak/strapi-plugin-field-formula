'use strict';

module.exports = ({ strapi }) => ({
  async calculate(ctx) {
    ctx.body = await strapi
      .plugin('field-formula')
      .service('mathjsService')
      .calculate(ctx.request.body.formula, ctx.request.body.scope);
  }
});
