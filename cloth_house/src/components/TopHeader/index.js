import React,{useContext} from "react";
import ErrorBoundary from "../../Hoc/ErrorBoundary.js";
import { Layout,Col } from "antd";
import {Menu, Row, Dropdown,Button,Badge ,Comment,  Avatar } from "antd";
import {GlobalOutlined } from '@ant-design/icons';
import _ from "underscore";
import { FaShoppingBag } from "react-icons/fa";
import AutoCompleteSearch from "./autoComplete"
import "./topHeader.css";
import { useSelector } from "react-redux";
import LangContext,{langOptions} from "../../context/LangContext.js"
const { Header } = Layout;
const SmileBagHeader= (props) =>{
  const { switchLang } = useContext(LangContext);
  const cartdata = useSelector(state => state.cart, _.isEqual);

const goToCart=()=>{
  console.log("cartdata.items.length===>",cartdata.items.length);
  if(cartdata.items.length){


    props.history.push('/cart')
  }
}

 const menu=(<Menu className="globemenu">
  {Object.keys(langOptions).map((key)=>{ 
   return <Menu.Item key={Math.random()}>
      <Button  className="globemenu" type="link" value={key} onClick={()=>{console.log("key======>",key)
    switchLang(key)
    }} >{langOptions[key]}</Button>
    </Menu.Item>
  })} 
  
  </Menu>);

  const cartmenu=(<Menu style={{width:"225px"}} className="globemenu dropdownprops">
   {cartdata.items.length<1?<Menu.Item key="empty">
   <center> <span style={{fontFamily:"Lato",fontSize:"15px",fontWeight:"bold"}}>Empty Cart</span></center>
   </Menu.Item>:<></>} 
  {cartdata.items.map((key,index)=>{ 
   return <><Menu.Item key={key.id} onClick={goToCart}>
      <Comment
      author={<><div>{key.productTitle} Qty:{key.count}</div></>}
      avatar={
        <Avatar
          src={key.imgsrc}
          alt={key.productTitle}
        />
      }
      content={
        <p style={{textOverflow: "ellipsis",whiteSpace: "nowrap",overflow: "hidden"}}>
          {key.productDescription}
        </p>
      }
      
    />
    </Menu.Item>
    
  <Menu.Divider />
    </>
  })}

<Menu.Item key="viewall" onClick={goToCart}>
   <center> <span style={{fontFamily:"Lato",fontSize:"15px",fontWeight:"bold",color:"orange"}}>{"Go To Cart >>"}</span></center>
   </Menu.Item>
  
  </Menu>
  
  );

  
  return (
    <>
    <ErrorBoundary>
      <Header className="header">
        <Row justify="space-between" align="middle">
          <Col span={5}>
        
        <div className="logo" ><a className="logo" onClick={()=>{
          props.history.push("/")
        }}>
          SmileBag{" "}
          <img alt="fallback" className="logoImage" src="./assets/images/Raster.png"></img></a>
        </div>
       </Col>
       <Col span={6}>
        <AutoCompleteSearch >
    </AutoCompleteSearch>
        </Col>
        <Col span={8}>
          <Row justify="start">
              <Col span={6}>
              <Button className="login" type="link" onClick={()=>{
          props.history.push('/login')
        }}>
          {props.intl&&props.intl.formatMessage({id:"app.components.LangSwitch.loginSignUp"})}
        </Button>
              </Col>

              <Col span={6}>
                <div>
                <Badge size="medium" count={cartdata.items.length} overflowCount={9}>
                <Dropdown className="globe" overlay={cartmenu} placement="bottomCenter" arrow>
        <FaShoppingBag size={40} className="cart" onClick={goToCart} /> 
        </Dropdown>
        </Badge>
        </div>
        </Col>
        <Col span={6}>
        <Dropdown className="globe" overlay={menu} placement="bottomCenter" arrow>
         <GlobalOutlined  className="globe"/> 
        </Dropdown>
        </Col>

          </Row>
        
        </Col>
        
       
        </Row>
      </Header>
      </ErrorBoundary>
    </>
  );
};


export default SmileBagHeader;