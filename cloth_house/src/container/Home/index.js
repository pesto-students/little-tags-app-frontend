import React from "react";
import "./home.css";
import TopHeader from "../../components/TopHeader";
import Categories from "../../components/Categories";
import {CarouselOffers,Offers} from "../../components/Offers";
import SmileBagFooter from "../../components/Footer";
import {injectIntl} from "react-intl"
import { Layout,Divider } from "antd";

const { Content } = Layout;
 function Home(props) {



  return (
    <>
    <Layout className="layout">
        <TopHeader {...props} />
        <Content className="content">
          <Categories {...props}/>
          <CarouselOffers {...props}/>
          <Divider style={{fontSize:"x-large"}}>{props.intl&&props.intl.formatMessage({id:"app.components.LangSwitch.home.offerstitle"})}</Divider>
          <Offers {...props}/>
        </Content>
        <SmileBagFooter {...props} />
      </Layout>
      
    </>
  );
}
export default injectIntl(Home) 