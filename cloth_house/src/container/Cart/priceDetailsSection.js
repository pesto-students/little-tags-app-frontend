import React from "react"
import {Row,Col, Button} from "antd"; 
import { useSelector } from "react-redux";
export default function PriceAction(props){
  //console.log("Orios=======>",props);  
  const curState=useSelector((state)=>state);
    //console.log("PriceAction===========>",curState);

  const totalDiscount=(arg)=>{
    let discount=0;
    for(let key in curState.cart.items){
     // console.log("key========>",key)
      discount=discount+parseInt(curState.cart.items[key][arg])
    }
    return discount
  }

  const routeAccordingToProp=()=>{
     
      if(props.from==="order"){

        props.history.push("/payment")
      }
      if(props.from==="cart"){
        props.history.push("/order")
      }
    }

   const getText=()=>{
    if(props.from==="order") return props.intl.formatMessage({id:"app.containers.Login.continue"}) 
    if(props.from==="cart") return  props.intl.formatMessage({id:"app.containers.Login.placeOrder"})
    if(props.from==="payment") return  props.intl.formatMessage({id:"app.containers.Login.payAndPlaceOrder"})
  } 
  return <>  
  <Row>
     <Col className="pad_left_2">
     <div className="priceHeader">{props.intl.formatMessage({id:"app.containers.Login.priceDetails"})}</div>
     </Col>   
    </Row>
     <Row className="priceSubSection">
      <Col span={16}>{props.intl.formatMessage({id:"app.containers.Login.priceItem"},{count:curState.cart.items.length})}</Col>
      <Col span={8}>₹500</Col>
      </Row>
      <Row className="priceSubSection">
      <Col span={16}>{props.intl.formatMessage({id:"app.containers.Login.discount"})}</Col>
      <Col span={8}>₹{totalDiscount("productDiscount")}</Col>
      </Row>
      <Row className="priceSubSection">
      <Col span={16}>{props.intl.formatMessage({id:"app.containers.Login.deliveryCharges"})}</Col>
      <Col span={8}>₹{totalDiscount("productDiscount")}</Col>
      </Row>
      <Row className="priceSubSection borderTopBottom">
      <Col span={16}>{props.intl.formatMessage({id:"app.containers.Login.totalAmount"})}</Col>
      <Col span={8}>₹{totalDiscount("productPrice")}</Col>
      </Row>
      <Row className="priceSubSection marTop">
      <Col>{props.intl.formatMessage({id:"app.containers.Login.saveAmount"},{price :"₹"+totalDiscount("productPrice")})} </Col>
      </Row>
      <Row className="priceSubSection">
          <Col className="textAlignCenter" span={24}>
          <Button className="bgForPlaceButton" onClick={routeAccordingToProp}>{getText()}</Button>
          </Col>
      </Row>
    </>

}