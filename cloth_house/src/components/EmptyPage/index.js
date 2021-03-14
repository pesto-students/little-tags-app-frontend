import React from "react";
import {Image,Row,Col, Button} from "antd";
export default function EmptyPage(props){
    console.log("EmptyPage============>",props)
    return <div>
    <Row style={{paddingTop:"2%",paddingLeft:"2%"}}>
         <Col>
        <h2> 
            {props.from==="wishlist"&&
            props.intl.formatMessage({id:"app.components.cart.myWishlist"})}
            </h2> 
        </Col>
     </Row>
     <Row style={{paddingLeft:"45%"}}>   
    <Image width={200} src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90">
    </Image>
    </Row>
    <Row style={{paddingLeft:"48%",paddingTop:"1%"}}>
    <Col>
    <p>

    {props.from==="wishlist"?
            props.intl.formatMessage({id:"app.components.cart.emptyWishlist"}):
            props.intl.formatMessage({id:"app.components.cart.emptyCart"})}
    </p>
    <p>
    <Button onClick={()=>{props.history.push("/home")}}>
    {props.intl.formatMessage({id:"app.components.cart.shopNow"})}
    </Button>
    </p>
    </Col>
    </Row>
    </div> 
}