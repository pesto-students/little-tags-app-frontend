import React from "react"
import {
    addToCart,
    removeFromCart,
  } from "../../redux/action";
  import { useDispatch} from "react-redux";
  import {
    Row,
    Col
  
  } from "antd";
  import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

export default function PlusMinusButton(args){
   // console.log("PlusMinusButton=======>",args);
    const dispatch = useDispatch();
    return (<>
    <div className="plusminusbuttonborder">
              <Row justify="space-around" align="middle">
                <Col><MinusCircleOutlined id="minusbutton" className="minusbutton"  onClick={async () => { dispatch(removeFromCart(args.itemdata));}}/></Col>
                <Col><div className="cartcount">{args.itemdata.count}</div></Col>
                <Col><PlusCircleOutlined id="plusbutton" className="plusbutton"  onClick={async () => { dispatch(addToCart(args.itemdata))}}/></Col>
                
              </Row>
              </div>
    </>);
  }