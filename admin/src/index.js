import { prefixPluginTranslations } from '@strapi/helper-plugin';

import pluginPkg from '../../package.json';
import pluginId from './pluginId';

const { name } = pluginPkg.strapi;

export default {
  register(app) {
    app.customFields.register({
      name,
      pluginId,
      type: 'json',
      intlLabel: {
        id: 'strapi-plugin-field-formula.formula.label',
        defaultMessage: 'Formula'
      },
      intlDescription: {
        id: 'strapi-plugin-field-formula.formula.description',
        defaultMessage: 'Let Formula to calculate!'
      },
      components: {
        Input: async () =>
          import(/* webpackChunkName: "input-component" */ './components/FormulaField')
      },
      options: {}
    });
  },

  bootstrap() {},
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale
            };
          })
          .catch(() => {
            return {
              data: {},
              locale
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  }
};
