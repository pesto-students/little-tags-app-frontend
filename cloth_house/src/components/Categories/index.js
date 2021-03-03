import { React } from "react";
import { Row, Col,  Space, Menu, Dropdown,Divider } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./categories.css";
import {Button} from "antd"
const menu = (
  <Menu>
    <Menu.Item>
      <Button type="link">1st menu item</Button>
    </Menu.Item>
    <Menu.Item>
      <Button type="link">2nd menu item</Button>
    </Menu.Item>
    <Menu.Item>
      <Button type="link">3rd menu item</Button>
    </Menu.Item>
  </Menu>
);

const Category = (args) => {
  return (
    <>
      <Space>
        <img
          src={args.imagesrc}
          alt="fallback"
          style={{ width: "55px", height: "55px" }}
        ></img>
        <Dropdown overlay={menu} placement="bottomCenter" arrow>
          <Button type="link"
            className="ant-dropdown-link category"
            href={args.hreflink}
          >
            {args.menuLabel} <DownOutlined />
          </Button>
        </Dropdown>
      </Space>
    </>
  );
};

const Categories = (props) => {
 const redirectToParticularCategory=(category)=>{
  props.history&&props.history.push(category)
 }
  return (
    <div className="categories">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align="middle" justify="left">
        <Col onClick={()=>redirectToParticularCategory("/category/clothing")} className="gutter-row " xs={16} sm={6} md={5} lg={3} xl={3}>
          <Category

            imagesrc="./assets/images/clothing.png"
            menuLabel={props.intl&&props.intl.formatMessage({id:"app.components.LangSwitch.category.clothing"})}
            //hreflink="/category/clothing"
            
          />
        </Col>
        <Divider type="vertical" style={{margin:"2px",height:"50px",borderWidth:"2px",borderColor:"#baafaf"}} />
        <Col onClick={()=>redirectToParticularCategory("/category/footwear")} className="gutter-row " xs={16} sm={6} md={5} lg={3} xl={3}>
          <Category
            imagesrc="./assets/images/footwear.jpg"
            menuLabel={props.intl&&props.intl.formatMessage({id:"app.components.LangSwitch.category.footwear"})}
           // hreflink="/category/footwear"
           
          />
        </Col>
        <Divider type="vertical" style={{margin:"2px",height:"50px",borderWidth:"2px",borderColor:"#baafaf"}}  />
        <Col onClick={()=>redirectToParticularCategory("/category/bags")} className="gutter-row " xs={16} sm={6} md={5} lg={3} xl={3}>
          <Category imagesrc="./assets/images/bags.png" 
          menuLabel={props.intl&&props.intl.formatMessage({id:"app.components.LangSwitch.category.bags"})}
          //hreflink="/category/bags"
          
          />
        </Col>
      </Row>
    </div>
  );
};

export default Categories;
