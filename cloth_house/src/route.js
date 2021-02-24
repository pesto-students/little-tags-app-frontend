import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./container/Home/index";
import NotFoundPage from "./components/NotFoundPage/index";
import { withRouter } from "react-router";
import ErrorBoundary from "./Hoc/ErrorBoundary";
function Routes(props) {
  console.log("Routes", props);

  return (
    <ErrorBoundary>
      <Switch history={props.history}>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path={"/test"} component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    </ErrorBoundary>
  );
}
export default withRouter(React.memo(Routes));
