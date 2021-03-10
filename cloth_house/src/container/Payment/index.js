import React, { useState } from  "react";
import TopHeader from "../../components/TopHeader";
import Categories from "../../components/Categories";
import SmileBagFooter from "../../components/Footer";
import "./payment.css"
import {Row,Col,Radio,Button,Input, Divider} from "antd";

import PriceAction from "../Cart/priceDetailsSection";
export default function Cart(props){
const [state,setState]=useState({payType:1})

const onChangePayMethod=(e)=>{
setState({...state,payType:e.target.value})
}

return <>
  <TopHeader {...props}/>
  <Categories {...props}/>

  <Row>
      <Col span={24} className="headFontSize">
       PAYMENT
      </Col>
  </Row>
      
  <Row className={"width100"}>
      <Col span={14} className={"width100"}>
          <Row>
              <Col  span={24}>
              <section className={"bgColor widthForSection"}>
                    
                   <div className="mainOrder">Delivery Address</div> 
                <div className="subOrder">
                B-45 laxmi Nagar Telanganag-500070 (edit)
                </div>
                </section>
                
              </Col>
          </Row>
          <Row>
              <Col span={24}>
              <section className={"bgColor widthForOrder"}>
                    <div className="orderSummary">PAYMENT METHODS</div>
                </section>
              </Col>
          </Row>
      <Row className="radioSetting width100">
            <Col  span={24} >
        <Radio.Group className={"width100"} onChange={onChangePayMethod} value={state.payType}>
        <Radio className="borderBottom radioStyle"  value={1} >
          Credit Cards
        </Radio >
        <Radio  className="borderBottom radioStyle pTop15" value={2}>
          Debit Cards
        </Radio>
        <Radio  className="borderBottom radioStyle pTop15" value={3}>
          Wallets
        </Radio>
        <Radio className="radioStyle pTop15"   value={4}>
          Net Banking
        </Radio>
      </Radio.Group>
              
            </Col>
          </Row>

      </Col>

      <Col span={8} offset={2} className="priceBg">
      <PriceAction {...props} from={"payment"}/>
      </Col>
  </Row>
  <SmileBagFooter {...props} />
  </>
}