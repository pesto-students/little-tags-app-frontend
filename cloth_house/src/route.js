import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import React from "react";
import Home from "./container/home/index";
import NotFoundPage from "./components/notFoundPage/index";
export default function Routes(props) {
  console.log("props", props);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path={"/test"} component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
