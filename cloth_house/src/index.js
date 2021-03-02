import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LangProvider } from './context/LangContext';
import {Provider} from "react-redux";
import configureStore from "../src/redux/store"
ReactDOM.render(
  <React.StrictMode>
    
    <LangProvider>
    <Provider store={configureStore()}>
    <App/>
    </Provider>
  </LangProvider>
    
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
