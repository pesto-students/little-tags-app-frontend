import React from  "react";
import TopHeader from "../../components/TopHeader";
import Categories from "../../components/Categories";
import SmileBagFooter from "../../components/Footer";
import "./cart.css"
import {Row,Col} from "antd";
import PriceAction from "../../components/PriceDetail";
import ProductList from "../../components/ProductList"
export default function Cart(props){
return <>
  <TopHeader {...props}/>
  <Categories {...props}/>
  <Row className="cart_top_row">
      <Col span={12}>
          {props.intl.formatMessage({id:"app.containers.Login.myCart"})}
      </Col>
  </Row>

  
      <Row>
        <ProductList {...props} from="cart"/>

            <Col offset={2} span={8} className="priceBg priceHeight">
            <PriceAction {...props} from="cart"/>
            </Col>
          </Row>

  <SmileBagFooter {...props}/>
  </>
}