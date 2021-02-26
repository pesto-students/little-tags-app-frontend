import React from "react";
import { Alert } from "antd";
import "./forgot.css"

export default function ForgotPassword(props){

    return <p className={"paddingTop25"}>
    <Alert
      message={props.intl.formatMessage({id:"app.containers.Login.forgotPassword"})}
      description={props.intl.formatMessage({id:"app.containers.Login.forgotPasswordDesc"})}
      type="info"
    //   closable
    />
    </p>
}