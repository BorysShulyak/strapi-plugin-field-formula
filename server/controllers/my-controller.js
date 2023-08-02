'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-plugin-field-formula')
      .service('myService')
      .getWelcomeMessage();
  }
});
