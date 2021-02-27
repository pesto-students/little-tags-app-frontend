import { React } from "react";
import { Row, Col,  Space, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { injectIntl } from "react-intl";
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
            onClick={(e) => e.preventDefault()}
          >
            {args.menuLabel} <DownOutlined />
          </Button>
        </Dropdown>
      </Space>
    </>
  );
};

const Categories = (props) => {
  return (
    <div className="categories">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align="middle">
        <Col className="gutter-row " span={3}>
          <Category
            imagesrc="./assets/images/clothing.png"
            menuLabel={props.intl.formatMessage({id:"app.components.LangSwitch.category.clothing"})}
          />
        </Col>
        <Col className="gutter-row " span={3}>
          <Category
            imagesrc="./assets/images/footwear.jpg"
            menuLabel={props.intl.formatMessage({id:"app.components.LangSwitch.category.footwear"})}
          />
        </Col>
        <Col className="gutter-row " span={3}>
          <Category imagesrc="./assets/images/bags.png" menuLabel={props.intl.formatMessage({id:"app.components.LangSwitch.category.bags"})} />
        </Col>
      </Row>
    </div>
  );
};

export default injectIntl(Categories);
