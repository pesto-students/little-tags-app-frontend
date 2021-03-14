import React from  "react";
import TopHeader from "../../components/TopHeader";
import Categories from "../../components/Categories";
import SmileBagFooter from "../../components/Footer";
import "./cart.css"
import {Row,Col,Space, Divider} from "antd";
import PriceAction from "../../components/PriceDetail";
import ProductList from "../../components/ProductList";
import { useSelector } from "react-redux";
import EmptyCart from "../../components/EmptyPage"
export default function Cart(props){
  const curState=useSelector((state)=>state);
console.log("Cart=====>",curState);

// if(curState.cart.items&&!curState.cart.items.length){
// props.history.push("/home")
// }
return <>
  <TopHeader {...props}/>
  <Categories {...props}/>
  <Row className="cart_top_row" justify="start" align="middle">
      <Col span={8}>
          {props.intl.formatMessage({id:"app.containers.Login.myCart"})}
      </Col>
  </Row>
  
      <>
      {curState.cart.items.length?<Row>
      <ProductList {...props} from="cart"/>

            <Col offset={2} span={8} className="priceBg priceHeight">
            <PriceAction {...props} from="cart"/>
           
            </Row>:<EmptyCart {...props} from="cart"/>}
          </>
<SmileBagFooter {...props} className={curState.cart.items.length>1?"":"positionFixed"}/>
  </>
}