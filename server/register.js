'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'formula',
    plugin: 'field-formula',
    type: 'json'
  });
};
