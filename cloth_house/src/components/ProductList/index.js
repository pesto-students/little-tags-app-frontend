import React,{useState} from "react";

import "./productlist.css"
import {Row,Col,Space,Image,Radio,Button} from "antd";
import { useSelector,useDispatch } from "react-redux";
import PlusMinusButton from "../PlusMinus"
import {
    removeFromCart,
  } from "../../redux/action";
export default function ProductList(props){
const curState=useSelector((state)=>state); 
const dispatch=useDispatch() 
return <Col span={props.from==="cart"?14:24}>
 {Array.isArray(curState.cart.items)&&curState.cart.items.map((key)=>{
    return  <Row>
      
      <Col  span={12}>
    <Image
      width={300}
      height={300}
      src={key.imgsrc}
    ></Image>
  </Col>
  <Col className="gutter-row"  offset={2}>
    <Row>
      <h1 className="productTitle">{key.productTitle}</h1>
    </Row>
    
    <Row className="mbot">
      <Space>
        <Col>
          <span className="productSizeHead">Size :</span>
        </Col>
        <Col>
        <Radio.Group defaultValue="L" size="large">
<Radio.Button  className="productSize" value="L">L</Radio.Button>
</Radio.Group>
        </Col>
      </Space>
    </Row>
    
    <Row className="mbot">
        <Col>
          <span className="productOfferPrice">₹{key.productPrice}</span>
        </Col>
    </Row>
    

    <Row className="mbot">
    <PlusMinusButton itemdata={key}/>
        
    </Row>    
  
  <Row className="mbot">
      <Col className="textAlignLeft" span={24}>
      <Button type="link"  onClick={async () => { dispatch(removeFromCart({...key,remove:true}))}} className={"paddingZero"}>
          {props.intl&&props.intl.formatMessage({id:"app.containers.Login.remove"})}
      </Button>
      </Col>
  </Row>
  </Col>  
  </Row>
  
})}
</Col>
}