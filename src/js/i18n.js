import { createI18n } from 'vue-i18n'

const EXTRACT_LANG_FROM_FILE = new RegExp('.([a-z]{2}).json$')
const extractLanguageFromPath = path => path.match(EXTRACT_LANG_FROM_FILE)[1]
const context = require.context('locales', true, /\.json$/);
const locales = {}

context.keys().forEach(filename => {
  const language = extractLanguageFromPath(filename)
  _.merge(locales, {[language]: context(filename)});
})

export default createI18n({
  locale: 'es',
  messages: locales
})
