import React from "react";
import "./productdetail.css";
import TopHeader from "../../components/TopHeader";
import Categories from "../../components/Categories";
import { useParams } from "react-router-dom";
import SmileBagFooter from "../../components/Footer";
import { injectIntl } from "react-intl";
import {
    Layout,
    Divider,
    Row,
    Col,
    Button,
    Collapse,
    Breadcrumb,
    Select,
    Space,
    Card,
    Image
  } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
const { Content } = Layout;



function ProductDetail(props){
    let { categoryname,productname } = useParams();
    return (<>
    <Layout className="layout">
        <TopHeader {...props} />
        <Content className="content">
            {categoryname} {productname}
        </Content>
        <SmileBagFooter {...props}/>
      </Layout>
    </>);
}

export default injectIntl(ProductDetail);

