import { Route, Switch,useParams } from "react-router-dom";
import React from "react";
import Home from "./container/Home/index";
import CategoriesPage from "./container/categories/index";
import ProductDetail from "./container/productdetail/index";
import NotFoundPage from "./components/NotFoundPage/index";
import { withRouter } from "react-router";
import {injectIntl} from "react-intl";
import ErrorBoundary from "./Hoc/ErrorBoundary";
import Login  from "./container/Login";
import Signup from "./container/SignUp" 
import ForgotPassword from "./container/ForgotPassword"
import Cart from "./container/Cart"
import Order from "./container/Order"
import Payment from "./container/Payment"
function Routes(props) {

  return (
    <ErrorBoundary>
      <Switch history={props.history}>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path={"/category/:categoryname?"} component={CategoriesPage} />
        <Route exact path={"/detail/:categoryname/:productname?"} component={ProductDetail} />
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

         <Route exact path={"/cart"} render={() => (
                        <Cart {...props}  />
                      )}/>

          <Route exact path={"/order"} render={() => (
                        <Order {...props}  />
                      )}/>

          <Route exact path={"/payment"} render={() => (
                        <Payment {...props}  />
                      )}/>                                                                
        <Route component={NotFoundPage} />
      </Switch>
    </ErrorBoundary>
  );
}
export default withRouter(React.memo(injectIntl(Routes)));
