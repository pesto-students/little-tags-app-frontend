import { React,useContext } from "react";
import { Input, Row, Col, Select, Space, Menu, Dropdown, Button, Carousel ,Card  } from "antd";
import { DownOutlined } from "@ant-design/icons";
import LangContext,{langOptions} from "../../context/LangContext.js"
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