import React from  "react";
import TopHeader from "../../components/TopHeader";
import Categories from "../../components/Categories";
import SmileBagFooter from "../../components/Footer";
import "./order.css"
import {Row,Col} from "antd";
import PriceAction from "../../components/PriceDetail";
import ProductList from "../../components/ProductList";
import { useSelector } from "react-redux";
import AddressModel from "../../components/Address/index"

export default function Cart(props){
  const curState=useSelector((state)=>state);
  if(curState.cart.items&&!curState.cart.items.length){
    props.history.push("/home")
    }


  
return <>
  <TopHeader {...props}/>
  <Categories {...props}/>   
  <Row>
    
       <Col span={14}>
          <AddressModel {...props}/>
          <Row>
              <Col span={24}>
              <section className={"bgColor widthForOrder"}>
                    <div className="orderSummary">{props.intl.formatMessage({id:"app.containers.Login.orderSummary"})}</div>
                </section>
              </Col>
          </Row>
      <Row>
      <ProductList {...props} from="order"/>
  
          </Row>

      </Col>

      <Col span={8} offset={2} className="priceBg">
      <PriceAction {...props} from={"order"}/>
      </Col>
  </Row>
  
  <SmileBagFooter {...props} className={curState.catdata.wishlist.items.length>1?"":"positionFixed"} />
  </>
}