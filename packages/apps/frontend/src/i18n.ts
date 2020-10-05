import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { En as EnUi } from '@meet/ui';
import { En as EnShared } from '@meet/shared';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    defaultNS: 'common',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  });

i18n.addResourceBundle('en', 'ui', EnUi);
i18n.addResourceBundle('en', 'shared', EnShared);

export default i18n;
