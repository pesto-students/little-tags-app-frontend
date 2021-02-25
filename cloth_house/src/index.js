import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {IntlProvider} from 'react-intl';
import reportWebVitals from "./reportWebVitals";
import English from "./lang/en-US.json";
import French from  "./lang/fr-FR.json"
const locale="fr-FR" ||navigator.language;
let lang;
console.log("locale======>",locale)
if(locale==="en-GB"){
  lang=English
}else{
  lang=French
}

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={lang}>
    <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
