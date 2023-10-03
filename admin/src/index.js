import { prefixPluginTranslations } from '@strapi/helper-plugin';

import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import getTrad from './utils/getTrad';

const { name } = pluginPkg.strapi;

export default {
  register(app) {
    app.customFields.register({
      name: 'formula',
      pluginId: 'field-formula',
      type: 'json',
      intlLabel: {
        id: getTrad(`label`),
        defaultMessage: 'Formula'
      },
      intlDescription: {
        id: getTrad(`description`),
        defaultMessage: 'Let Formula to Calculate your Scope!'
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
