import React from "react";
import ErrorBoundary from "../../Hoc/ErrorBoundary.js";
import { Layout } from "antd";
import { Input, Row, Col  } from "antd";
import { AudioOutlined,SearchOutlined } from '@ant-design/icons';
import "./topHeader.css";
const { Header, Footer, Sider, Content } = Layout;

const SmileBagHeader= () =>{
  return (
    <>
    <ErrorBoundary>
      <Header className="header">
        <Row align="start">
          <Col  span={6}>
        <div className="logo">
          SmileBag{" "}
          <img className="logoImage" src="./assets/images/Raster.png"></img>
        </div>
        </Col >
        <Col ol span={6}>
        <div className="searchInput">
        <Input size="large" placeholder="Search" suffix={<SearchOutlined onClick={() => {}} />} />
        </div>
        </Col >
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
