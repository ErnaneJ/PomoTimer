import i18n from './i18n';
import { PomoTimer } from "./components/PomoTimer";
import { useEffect, useState } from 'react';
import LocaleContext from './LocaleContext';

export function App() {
  const [locale, setLocale] = useState(i18n.language);
  
  useEffect(() => {
    i18n.on('languageChanged', (lng) => setLocale(i18n.language));
  }, [])

  return  <LocaleContext.Provider value={{locale, setLocale}} key={locale}>
    <PomoTimer/>
  </LocaleContext.Provider>;
}