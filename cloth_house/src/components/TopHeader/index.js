import React from "react";
import ErrorBoundary from "../../Hoc/ErrorBoundary.js";
import { Layout } from "antd";
import { Input, Row, Col, Select,Space,Button  } from "antd";
import { AudioOutlined,SearchOutlined,EnvironmentOutlined ,GlobalOutlined } from '@ant-design/icons';
import "./topHeader.css";
const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;
const SmileBagHeader= () =>{
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
        <Button className="login-button" block={true} type="primary" ghost={true} size="large">
          Login/Signup
        </Button>
        </div>
        <div className="globe">
        <GlobalOutlined onClick={() => {}} className="globe"/>
        </div>
        </Space>
        </Row>
      </Header>
      </ErrorBoundary>
    </>
  );
};
const HeaderNew= () => {
  return (<>
    <ErrorBoundary>
      <div className={"width100"}>Header Component</div>
    </ErrorBoundary>
    </>
  );
};

export default SmileBagHeader;
