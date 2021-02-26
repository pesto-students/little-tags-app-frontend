import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import TopHeader from "../../components/TopHeader";
import Categories from "../../components/Categories";
import {CarouselOffers,Offers} from "../../components/Offers";
import SmileBagFooter from "../../components/Footer";
import messages from "./messages";
import {injectIntl} from "react-intl"
import { Layout,Divider } from "antd";
const { Header, Footer, Sider, Content } = Layout;
 function Home(props) {
  console.log("Home===>",props);
  return (
    <>
    <Layout className="layout">
        <TopHeader />
        <Content>
          <Categories/>
          <CarouselOffers/>
          <Divider style={{fontSize:"x-large"}}>{props.intl.formatMessage({id:"app.components.LangSwitch.home.offerstitle"})}</Divider>
          <Offers />
        </Content>
        <SmileBagFooter />
      </Layout>
      
    </>
  );
}
export default injectIntl(Home) 