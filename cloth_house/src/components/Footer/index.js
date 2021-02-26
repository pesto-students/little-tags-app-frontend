import { React } from "react";
import {  Space  } from "antd";
import { injectIntl } from "react-intl";
import "./footer.css";
import { Footer } from "antd/lib/layout/layout";



const SmileBagFooter = (props) => {
    return (<Footer className="footer">
    <Space>
    <a href="#">{props.intl.formatMessage({id:"app.components.LangSwitch.footer.terms"})}</a> |
    <a href="#">{props.intl.formatMessage({id:"app.components.LangSwitch.footer.madeInIndia"})}</a>
    </Space>
    </Footer>);
}


export default injectIntl(SmileBagFooter)