import React,{useContext} from "react";
import "./App.css";
import Routes from "./route";
import ErrorBoundary from "./Hoc/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import {IntlProvider} from "react-intl";
import LangContext from "./context/LangContext"

function App(props) {
  //console.log("App--->",props);
  const { lang, currentLangData } = useContext(LangContext);
  return (
    <div className="App">    
      <BrowserRouter>
        <ErrorBoundary>
        <IntlProvider locale={lang} messages={currentLangData}>  
          <Routes {...props}/>
          </IntlProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
