import React, { useState, useLayoutEffect } from 'react';
import English from "../lang/en-US.json";
import French from  "../lang/fr-FR.json"
import English_GB from "../lang/en-GB.json"
const LangContext = React.createContext({
  lang: 'en-US',
  currentLangData: English,
  switchLang: () => {},
});

export default LangContext;

export function LangProvider (props) {

  const [lang, setLang] = useState(window.localStorage.getItem('appUILang') || window.navigator.language);
  
  useLayoutEffect(() => {
    const selectedLang = window.localStorage.getItem('appUILang');
    if (selectedLang) {
      setLang(selectedLang);
    } 
  }, [lang])

  const switchLang = (ln) => {
    setLang(ln);
    window.localStorage.setItem('appUILang', ln);
  };
  return (
    <LangContext.Provider value={{
      lang, 
      switchLang, 
      currentLangData: langData[lang]
    }}>
      {props.children}
    </LangContext.Provider>
  );
};

export const langData = {
  'en-GB': English_GB,
  'en-US': English,
  'fr-FR':French,
}

export const langOptions = {
    'en-GB': "English_GB",
    'en-US': "English",
    'fr-FR':"French",
  }