import React from "react"
import {Row,Col, Button} from "antd"; 
export default function PriceAction(props){
    const routeAccordingToProp=()=>{
      console.log("Orios=======>",props.from);
      if(props.from==="order"){

        props.history.push("/payment")
      }
      if(props.from==="cart"){
        props.history.push("/order")
      }
    }

   const getText=()=>{
    if(props.from==="order") return "Continue" 
    if(props.from==="cart") return  "Place Order"
    if(props.from==="payment") return  "Pay & Place Order"
  } 
  return <>  
  <Row>
     <Col className="pad_left_2">
     <div className="priceHeader">PRICE DETAILS</div>
     </Col>   
    </Row>
     <Row className="priceSubSection">
      <Col span={16}>Price (1 item)</Col>
      <Col span={8}>₹500</Col>
      </Row>
      <Row className="priceSubSection">
      <Col span={16}>Discount</Col>
      <Col span={8}>₹500</Col>
      </Row>
      <Row className="priceSubSection">
      <Col span={16}>Delivery Charges</Col>
      <Col span={8}>₹44</Col>
      </Row>
      <Row className="priceSubSection borderTopBottom">
      <Col span={16}>Total Amount</Col>
      <Col span={8}>₹688</Col>
      </Row>
      <Row className="priceSubSection marTop">
      <Col>you will save ₹688 on this order </Col>
      </Row>
      <Row className="priceSubSection">
          <Col className="textAlignCenter" span={24}>
          <Button className="bgForPlaceButton" onClick={routeAccordingToProp}>{getText()}</Button>
          </Col>
      </Row>
    </>

}