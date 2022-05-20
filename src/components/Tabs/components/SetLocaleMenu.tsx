import { Listbox } from '@headlessui/react';
import { useContext } from "react";
import { Check, Translate } from "phosphor-react";
import { useTranslation } from 'react-i18next';
import LocaleContext from '../../../LocaleContext';
import i18n from '../../../i18n';
import toast from 'react-hot-toast';

const languages = [
  { id: 1, name: 'English', value: 'en', unavailable: false },
  { id: 2, name: 'Português', value: 'pt', unavailable: false }
]

export function SetLocaleMenu(){
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);

  function changeLocale(l :string):void {
    if (locale !== l) {
      i18n.changeLanguage(l);
      toast.dismiss();
      toast.success(t('update-language'));
    }
  }
  
  return (
    <Listbox value={locale} onChange={changeLocale}>
      <div className="transition-all relative mt-1">
        <Listbox.Button className="relative w-full h-10 rounded-lg backdrop-blur-sm bg-white/20 py-2 pl-3 pr-10 cursor-pointer text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate uppercase text-white font-semibold">{locale}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <Translate size={32} weight="bold" className="h-5 w-5 text-white" aria-hidden="true"/>
          </span>
        </Listbox.Button>
          <Listbox.Options className="absolute right-0 mt-1 max-h-60 w-min overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ">
            {languages.map((language, languageIdx) => (
              <Listbox.Option
                key={languageIdx}
                className={ ({ active }) =>
                  `w-100 relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
                value={language.value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {language.name}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <Check size={32} className="h-5 w-5" aria-hidden="true"/>
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
      </div>
    </Listbox>
  );
}