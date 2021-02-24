import "./App.css";
import Routes from "./route";
import ErrorBoundary from "./Hoc/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { injectIntl } from "react-intl";
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'

function App(props) {
  console.log("App=======>", props);
 const locale="en" 
  return (

    <div className="App">
    
      <BrowserRouter>
        <ErrorBoundary>
     <IntlProvider locale={locale}>
          <Routes {...props} />
          </IntlProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
