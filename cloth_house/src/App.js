import "./App.css";
import Routes from "./route";
import ErrorBoundary from "./Hoc/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import {IntlProvider} from 'react-intl';
import messages from "./messages";
function App(props) {
 const locale =  'fr-FR'; 
 
  return (

    <div className="App">
    
      <BrowserRouter>
        <ErrorBoundary>
     <IntlProvider locale={locale} messages={messages[locale]}>
          <Routes {...props} />
          </IntlProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
