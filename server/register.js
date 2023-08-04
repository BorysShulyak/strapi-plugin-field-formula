'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'strapi-plugin-field-formula',
    plugin: 'field-formula',
    type: 'json'
  });
};
