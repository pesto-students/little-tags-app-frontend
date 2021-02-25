import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import TopHeader from "../../components/TopHeader";
import messages from "./messages";
import {injectIntl} from "react-intl"
 function Home(props) {
  console.log("Home===>",props, messages);

  return (
    <>
      <TopHeader />
      <Link to="/test">{props.intl&&props.intl.formatMessage(messages.homeHeading)}</Link>
    </>
  );
}
export default injectIntl(Home) 