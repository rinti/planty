import i18n from "i18n-js"

const en = require("./en")
const ja = require("./ja")

i18n.locale = 'en'
i18n.fallbacks = true
i18n.translations = { en, ja }
