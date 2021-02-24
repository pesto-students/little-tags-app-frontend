import React from "react";
import "./topHeader.css";
import { Row, Col, Form } from "antd";
import ErrorBoundary from "../../Hoc/ErrorBoundary.js";
const Header = ({}) => {
  return (
    <ErrorBoundary>
      <div className={"width100"}>Header Component</div>
    </ErrorBoundary>
  );
};

export default Header;
