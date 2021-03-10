import React from "react"
import {Row,Col, Button} from "antd"; 
export default function PriceAction(){
    
  return <>  
  <Row>
     <Col className="pad_left_2">
     <div className="priceHeader">PRICE DETAILS</div>
     </Col>   
    </Row>
     <Row className="priceSubSection">
      <Col span={12}>Price (1 item)</Col>
      <Col span={12}>₹500</Col>
      </Row>
      <Row className="priceSubSection">
      <Col span={12}>Discount</Col>
      <Col span={12}>₹500</Col>
      </Row>
      <Row className="priceSubSection">
      <Col span={12}>Delivery Charges</Col>
      <Col span={12}>₹44</Col>
      </Row>
      <Row className="priceSubSection borderTopBottom">
      <Col span={12}>Total Amount</Col>
      <Col span={12}>₹688</Col>
      </Row>
      <Row className="priceSubSection marTop">
      <Col>you will save ₹688 on this order </Col>
      </Row>
      <Row className="priceSubSection">
          <Col className="textAlignCenter" span={24}>
          <Button className="bgForPlaceButton">Place Order</Button>
          </Col>
      </Row>
    </>

}