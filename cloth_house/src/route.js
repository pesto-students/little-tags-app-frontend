import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./container/Home/index";
import NotFoundPage from "./components/NotFoundPage/index";
import { withRouter } from "react-router";
import {injectIntl} from "react-intl";
import ErrorBoundary from "./Hoc/ErrorBoundary";
import Login  from "./container/Login";
import Signup from "./container/SignUp" 
import ForgotPassword from "./container/ForgotPassword"
function Routes(props) {
  console.log("Routes", props);

  return (
    <ErrorBoundary>
      <Switch history={props.history}>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path={"/test"} component={Home} />
        <Route exact path={"/login"} render={() => (
                        <Login {...props}  />
                      )}/>
        <Route exact path={"/signup"} render={() => (
                        <Signup {...props}  />
                      )}/>
         <Route exact path={"/forgot-password"} render={() => (
                        <ForgotPassword {...props}  />
                      )}/>                           
        <Route component={NotFoundPage} />
      </Switch>
    </ErrorBoundary>
  );
}
export default withRouter(React.memo(injectIntl(Routes)));
