import React,{useContext} from "react";
import ErrorBoundary from "../../Hoc/ErrorBoundary.js";
import { Layout } from "antd";
import {Menu,Input, Row, Select,Space,Dropdown,Button  } from "antd";
import { SearchOutlined,EnvironmentOutlined ,GlobalOutlined,ShoppingCartOutlined } from '@ant-design/icons';
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
        <Space align="center">
        <div className="logo" onClick={()=>{
          props.history.push("/")
        }}>
          SmileBag{" "}
          <img alt="fallback" className="logoImage" src="./assets/images/Raster.png"></img>
        </div>
       
        <div className="searchInput">
        <Input size="large" placeholder="Search" suffix={<SearchOutlined onClick={() => {}} />} />
        </div>
        <div >
        {/* <Select className="selectpin" suffixIcon={<EnvironmentOutlined className="selectpin"/>} size="large" bordered={false} defaultValue="500070">
        <Option value="500070">500070</Option>
        <Option value="500080">500080</Option>
        </Select> */}
        </div>
        
        <Button type="link" onClick={()=>{
          props.history.push('/login')
        }}>
          {props.intl&&props.intl.formatMessage({id:"app.components.LangSwitch.loginSignUp"})}
        </Button>
        
        <ShoppingCartOutlined className="cart" /> 
         <div className="globe">
        <Dropdown className="globe" overlay={menu} placement="bottomCenter" arrow>
         <GlobalOutlined  className="globe"/> 
        </Dropdown>
        </div>
        </Space>
        </Row>
      </Header>
      </ErrorBoundary>
    </>
  );
};


export default SmileBagHeader;