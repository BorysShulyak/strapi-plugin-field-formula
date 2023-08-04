'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'formula',
    plugin: 'strapi-plugin-field-formula',
    type: 'string'
  });
};
