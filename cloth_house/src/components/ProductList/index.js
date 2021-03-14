import React,{useState} from "react";

import "./productlist.css"
import {Row,Col,Space,Image,Radio,Button} from "antd";
import { useSelector,useDispatch } from "react-redux";
import PlusMinusButton from "../PlusMinus"
import {
    removeFromCart,
    addToCart,
    removeFromWishlist
  } from "../../redux/action";
export default function ProductList(props){
  
const curState=useSelector((state)=>state); 
console.log("Curstate======>",curState);

const dispatch=useDispatch() 
let products=[]
if(props.from==="wishlist"){
  products=curState.catdata.wishlist.items
}else{
  products=curState.cart.items
}

const handleAddToCart=(key)=>{
  dispatch(addToCart(key))
  dispatch(removeFromWishlist(key))
}

const CallForAddCart=(key)=>{
  let newcart=curState.cart.items.filter(x => x.id == key.id);   
          return  newcart.length>0?<PlusMinusButton itemdata={newcart[0]} />:  <Button
              id="addToCart"
              type="primary"
              style={{
                borderColor: "#1a4d7c",
                backgroundColor: "#1a4d7c",
                color: "#1a4d7c",
                fontWeight: "bold",
                fontFamily: "Lato",
              }}
              ghost="true"
              onClick={async () => { handleAddToCart(key);}}
            >
              Add To Cart
            </Button>
            
}

const removeCheck=(key)=>{
  if(props.from==="wishlist"){
    dispatch(removeFromWishlist({...key,remove:true}))
  }else{
    dispatch(removeFromCart({...key,remove:true}))
  }
}

return <Col span={props.from==="cart"?14:24}>
 {Array.isArray(products)&&products.map((key)=>{
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
    
    {props.from==="wishlist"?CallForAddCart(key):<PlusMinusButton itemdata={key}/>
 }
        
    </Row>    
  
  <Row className="mbot">
      <Col className="textAlignLeft" span={24}>
      <Button type="link"  onClick={async () => { removeCheck(key)}} className={"paddingZero"}>
          {props.intl&&props.intl.formatMessage({id:"app.containers.Login.remove"})}
      </Button>
      </Col>
  </Row>
  </Col>  
  </Row>
  
})}
</Col>
}