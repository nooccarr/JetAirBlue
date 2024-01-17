import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Korean from './lang/ko-KR.json';
import English from './lang/en-US.json';

export const Context = React.createContext();

const userLocale = navigator.language;

let lang;
if (userLocale === 'en-US') {
  lang = English;
} else if (userLocale === 'ko-KR') {
  lang = Korean;
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(userLocale);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === 'en-US') {
      setMessages(English);
    } else if (newLocale === 'ko-KR') {
      setMessages(Korean);
    }
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
