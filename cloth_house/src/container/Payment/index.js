import React, { useState } from  "react";
import TopHeader from "../../components/TopHeader";
import Categories from "../../components/Categories";
import SmileBagFooter from "../../components/Footer";
import "./payment.css"
import {Row,Col,Radio,Divider} from "antd";
import PriceAction from "../../components/PriceDetail";
import AddressModel from "../../components/Address/index"
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
       {props.intl.formatMessage({id:"app.containers.Login.payMent"})}
      </Col>
  </Row>
      
  <Row className={"width100"}>
      <Col span={14} className={"width100"}>
          <AddressModel {...props} />
          <Row>
              <Col span={24}>
              <section className={"bgColor widthForOrder"}>
                    <div className="orderSummary">{props.intl.formatMessage({id:"app.containers.Login.payMethod"})}</div>
                </section>
              </Col>
          </Row>
      <Row className="radioSetting width100">
            <Col  span={24} >
        <Radio.Group className={"width100"} onChange={onChangePayMethod} value={state.payType}>
        <Radio className="borderBottom radioStyle"  value={1} >
          {props.intl.formatMessage({id:"app.containers.Login.creditCard"})}
        </Radio >
        <Radio  className="borderBottom radioStyle pTop15" value={2}>
        {props.intl.formatMessage({id:"app.containers.Login.debitCard"})}
        </Radio>
        <Radio  className="borderBottom radioStyle pTop15" value={3}>
        {props.intl.formatMessage({id:"app.containers.Login.wallets"})}
        </Radio>
        <Radio className="radioStyle pTop15"   value={4}>
        {props.intl.formatMessage({id:"app.containers.Login.netBanking"})}
        </Radio>
      </Radio.Group>
              
            </Col>
          </Row>

      </Col>

      <Col span={8} offset={2} className="priceBg">
      <PriceAction {...props} from={"payment"}/>
      </Col>
  </Row>
  <Divider style={{borderColor:"white",height:"25px"}}></Divider>
  <SmileBagFooter {...props} />
  </>
}