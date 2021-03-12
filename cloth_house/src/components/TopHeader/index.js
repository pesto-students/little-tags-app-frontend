import React,{useContext} from "react";
import ErrorBoundary from "../../Hoc/ErrorBoundary.js";
import { Layout,Col } from "antd";
import {Menu, Row, Dropdown,Button,Badge  } from "antd";
import {  GlobalOutlined, } from '@ant-design/icons';
import _ from "underscore";
import { FaShoppingBag } from "react-icons/fa";
import AutoCompleteSearch from "./autoComplete"
import "./topHeader.css";
import { useSelector } from "react-redux";
import LangContext,{langOptions} from "../../context/LangContext.js"
const { Header } = Layout;
const SmileBagHeader= (props) =>{
  const { switchLang } = useContext(LangContext);
  const cartdata = useSelector(state => state.cart, _.isEqual);
  //console.log("cart data =>",cartdata);
 const menu=(<Menu className="globemenu">
  {Object.keys(langOptions).map((key)=>{ 
   return <Menu.Item key={Math.random()}>
      <Button  className="globemenu" type="link" value={key} onClick={()=>{console.log("key======>",key)
    switchLang(key)
    }} >{langOptions[key]}</Button>
    </Menu.Item>
  })} 
  
  </Menu>)

  
  return (
    <>
    <ErrorBoundary>
      <Header className="header">
        <Row justify="space-between" align="middle">
          <Col span={5}>
        
        <div className="logo" ><a className="logo" onClick={()=>{
          props.history.push("/")
        }}>
          SmileBag{" "}
          <img alt="fallback" className="logoImage" src="./assets/images/Raster.png"></img></a>
        </div>
       </Col>
       <Col span={6}>
        <AutoCompleteSearch >
    </AutoCompleteSearch>
        </Col>
        <Col span={8}>
          <Row justify="start">
              <Col span={6}>
              <Button className="login" type="link" onClick={()=>{
          props.history.push('/login')
        }}>
          {props.intl&&props.intl.formatMessage({id:"app.components.LangSwitch.loginSignUp"})}
        </Button>
              </Col>

              <Col span={6}>
                <div>
                <Badge size="medium" count={cartdata.items.length} overflowCount={9}>
        <FaShoppingBag size={40} className="cart" onClick={()=>{props.history.push('/cart')}} /> 
        </Badge>
        </div>
        </Col>
        <Col span={6}>
        <Dropdown className="globe" overlay={menu} placement="bottomCenter" arrow>
         <GlobalOutlined  className="globe"/> 
        </Dropdown>
        </Col>

          </Row>
        
        </Col>
        
       
        </Row>
      </Header>
      </ErrorBoundary>
    </>
  );
};


export default SmileBagHeader;