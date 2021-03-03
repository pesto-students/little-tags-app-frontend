import { React } from "react";
import {  Space  } from "antd";
import "./footer.css";
import { Footer } from "antd/lib/layout/layout";
import {Button} from "antd"



const SmileBagFooter = (props) => {
    //console.log("SmileBagFooter=====>",props);
    return (<Footer className="footer">
    <Space>
    <Button type="link">{props.intl&&props.intl.formatMessage({id:"app.components.LangSwitch.footer.terms"})}</Button> |
    <Button type="link">{props.intl&&props.intl.formatMessage({id:"app.components.LangSwitch.footer.madeInIndia"})}</Button>
    </Space>
    </Footer>);
}


export default SmileBagFooter