import React,{useContext} from "react";
import ErrorBoundary from "../../Hoc/ErrorBoundary.js";
import { Layout } from "antd";
import {Menu,Input, Row, Select,Space,Button,Dropdown  } from "antd";
import { SearchOutlined,EnvironmentOutlined ,GlobalOutlined } from '@ant-design/icons';
import "./topHeader.css";
import LangContext,{langOptions} from "../../context/LangContext.js"
import { injectIntl } from "react-intl";
const { Header } = Layout;
const { Option } = Select;
const SmileBagHeader= (props) =>{
  const { switchLang } = useContext(LangContext);

 const menu=(<Menu>
  {Object.keys(langOptions).map((key)=>{ 
   return <Menu.Item>
      <Button value={key} onClick={()=>{console.log("key======>",key)
    switchLang(key)
    }} >{langOptions[key]}</Button>
    </Menu.Item>
  })} 
  
  </Menu>)
  console.log("menu",menu)
  return (
    <>
    <ErrorBoundary>
      <Header className="header">
        <Row>
        <Space align="center">
        <div className="logo">
          SmileBag{" "}
          <img className="logoImage" src="./assets/images/Raster.png"></img>
        </div>
       
        <div className="searchInput">
        <Input size="large" placeholder="Search" suffix={<SearchOutlined onClick={() => {}} />} />
        </div>
        <div >
        <Select className="selectpin" suffixIcon={<EnvironmentOutlined className="selectpin"/>} size="large" bordered={false} defaultValue="500070">
        <Option value="500070">500070</Option>
        <Option value="500080">500080</Option>
        </Select>
        </div>
        <div className="login">
        <div className="login-button" block={true} type="primary" ghost={true} size="large">
          {props.intl.formatMessage({id:"app.components.LangSwitch.loginSignUp"})}
        </div>
        </div>
        <div className="globe">
        <Dropdown overlay={menu}>
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


export default injectIntl(SmileBagHeader);
