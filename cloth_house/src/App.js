import "./App.css";
import Routes from "./route";
import ErrorBoundary from "./Hoc/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
function App(props) {
 const locale =  'fr-FR'; 
 
  return (

    <div className="App">
    
      <BrowserRouter>
        <ErrorBoundary>
          <Routes {...props} />
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
