import React,{useContext} from "react";
import ErrorBoundary from "../../Hoc/ErrorBoundary.js";
import { Layout,Col } from "antd";
import {Menu,Input, Row, Select,Dropdown,Button  } from "antd";
import { SearchOutlined ,GlobalOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import AutoCompleteSearch from "./autoComplete"
import "./topHeader.css";
import LangContext,{langOptions} from "../../context/LangContext.js"
const { Header } = Layout;
const { Option } = Select;
const SmileBagHeader= (props) =>{
  const { switchLang } = useContext(LangContext);
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
        <Row>
          <Col span={6}>
        
        <div className="logo" onClick={()=>{
          props.history.push("/")
        }}>
          SmileBag{" "}
          <img alt="fallback" className="logoImage" src="./assets/images/Raster.png"></img>
        </div>
       </Col>
       <Col  span={10}>
        <AutoCompleteSearch >
  
    </AutoCompleteSearch>
        </Col>
        <Col span={4}>
        <Button type="link" onClick={()=>{
          props.history.push('/login')
        }}>
          {props.intl&&props.intl.formatMessage({id:"app.components.LangSwitch.loginSignUp"})}
        </Button>
        </Col>
        <ShoppingCartOutlined className="cart" /> 
         <div className="globe">
        <Dropdown className="globe" overlay={menu} placement="bottomCenter" arrow>
         <GlobalOutlined  className="globe"/> 
        </Dropdown>
        </div>
        </Row>
      </Header>
      </ErrorBoundary>
    </>
  );
};


export default SmileBagHeader;