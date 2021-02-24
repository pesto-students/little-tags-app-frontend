import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import TopHeader from "../../components/TopHeader";
import messages from "./messages";
 function Home(props) {
  console.log("Home===>", messages);

  return (
    <>
      <Link to="/test">{props.intl&&props.intl.formatMessage(messages.hubspotDesc)}</Link>
      <TopHeader />
    </>
  );
}
export default Home 