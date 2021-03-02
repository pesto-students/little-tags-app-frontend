import React from "react";
import "./categories.css";
import TopHeader from "../../components/TopHeader";
import Categories from "../../components/Categories";
import { useParams } from "react-router-dom";
import SmileBagFooter from "../../components/Footer";
import {injectIntl} from "react-intl"
import { Layout,Divider } from "antd";
const { Content } = Layout;
 function CategoriesPage(props) {
  //console.log("Home===>",props);
  let {pagename}=useParams();
  return (
    <>
    <Layout className="layout">
        <TopHeader {...props} />
        <Content className="content">
          <Categories/>
          {pagename}
        </Content>
        <SmileBagFooter />
      </Layout>
      
    </>
  );
}
export default injectIntl(CategoriesPage) 