import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import TopHeader from "../../components/TopHeader";
import Categories from "../../components/Categories";
import messages from "./messages";
import {injectIntl} from "react-intl"
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
 function Home(props) {
  console.log("Home===>",props);
  return (
    <>
    <Layout className="layout">
        <TopHeader />
        <Content>
          <Categories/>
        <Link to="/test">{props.intl&&props.intl.formatMessage(messages.homeHeading)}</Link>
        </Content>
        <Footer >Add Footer</Footer>
      </Layout>
      
    </>
  );
}
export default injectIntl(Home) 