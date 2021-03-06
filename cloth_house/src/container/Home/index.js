import React, { useEffect } from "react";
import "./home.css";
import TopHeader from "../../components/TopHeader";
import Categories from "../../components/Categories";
import {CarouselOffers,Offers} from "../../components/Offers";
import SmileBagFooter from "../../components/Footer";
import {injectIntl} from "react-intl"
import { Layout,Divider } from "antd";
import {fetchCategories,fetchCategoriesFailure,fetchCategoriesSuccess} from "../../redux/action";
import { useDispatch,useSelector } from 'react-redux'
const { Content } = Layout;
 function Home(props) {
const categories=useSelector((state)=>state)
console.log("Home===>",categories);
const dispatch = useDispatch()
useEffect(()=>{
dispatch(fetchCategories())
fetch("https://299b7901-79a5-4150-b143-f0af14279977.mock.pstmn.io/smilebag/products/clothing").then((res)=>res.json()).then((data)=>{
dispatch(fetchCategoriesSuccess(data))
}).catch(err=>{
  dispatch(fetchCategoriesFailure())
})
},[])


  return (
    <>
    <Layout className="layout">
        <TopHeader {...props} />
        <Content className="content">
          <Categories {...props}/>
          <CarouselOffers/>
          <Divider style={{fontSize:"x-large"}}>{props.intl&&props.intl.formatMessage({id:"app.components.LangSwitch.home.offerstitle"})}</Divider>
          <Offers />
        </Content>
        <SmileBagFooter {...props} />
      </Layout>
      
    </>
  );
}
export default injectIntl(Home) 