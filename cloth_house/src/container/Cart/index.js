import React, { useState } from  "react";
import TopHeader from "../../components/TopHeader";
import Categories from "../../components/Categories";
import SmileBagFooter from "../../components/Footer";
import "./cart.css"
import {Row,Col,Space,Avatar,Image,Rate,Radio,Button} from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import Plus from "../../images/plus"
import Minus from "../../images/minus"
import PriceAction from "./priceDetailsSection";
export default function Cart(props){
    const [state,setState]=useState({count:1})
const increment=()=>{
setState({...state,count:state.count+1})
}

const decrement=()=>{
    if(state.count>1)
    setState({...state,count:state.count-1})
}

const remove=()=>{
    console.log("remove Fired")
}

return <>
  <TopHeader {...props}/>
  <Categories {...props}/>
  <Row className="cart_top_row">
      <Col span={16}>
          My Cart
      </Col>
  </Row>

  <Row>
      <Col span={24}>
      <Row>
            <Col  span={8}>
              <Image
                width={400}
                height={400}
                src="https://rukminim1.flixcart.com/image/580/696/kjuby4w0/t-shirt/f/m/x/s-4057-4058-4129-fastcolors-original-imafzbjegphge6uu.jpeg?q=50"
              ></Image>
            </Col>
            <Col className="gutter-row" span={6} offset={2}>
              <Row>
                <h1 className="productTitle">Raymond</h1>
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
                    <span className="productOfferPrice">₹299</span>
                  </Col>
              </Row>
              

              <Row className="mbot">
                  <Col onClick={increment}>
             <Plus/>
                  </Col>
                  <Col span={2} className="fontSizeFor">{state.count}</Col>
                  <Col onClick={decrement}>
                  <Minus />
                  </Col>
              </Row>    
            
            <Row className="mbot">
                <Col className="textAlignLeft">
                <Button type="link" onClick={remove} className={"paddingZero"}>
                    {props.intl&&props.intl.formatMessage({id:"app.containers.Login.remove"})}
                </Button>
                </Col>
            </Row>
            </Col>

            <Col span={8} className="priceBg priceHeight">
            <PriceAction/>
            </Col>
          </Row>

      </Col>
      <Col span={12}></Col>
  </Row>
  <SmileBagFooter {...props}/>
  </>
}