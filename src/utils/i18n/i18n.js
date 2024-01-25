import Language from '../Language/Language.json'

const i18n = {

  i18n(key) {

    try {
      if (global.lan == "eng") return Language[key].en;
      else return Language[key].bn;
    }
    catch (error) {
      // throw error
      console.warn(error);
    }
  }
}

export default i18n;