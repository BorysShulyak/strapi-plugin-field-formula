'use strict';

const pluginPkg = require('../package.json');

const plugin = require('../admin/src/pluginId');

const { name } = pluginPkg.strapi;

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name,
    plugin,
    type: 'json'
  });
};
