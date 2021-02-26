import { React } from "react";
import { Input, Row, Col, Select, Space, Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./categories.css";

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank">3rd menu item</a>
    </Menu.Item>
  </Menu>
);

const Category = (args) => {
  return (
    <>
      <Space>
        <img
          src={args.imagesrc}
          style={{ width: "55px", height: "55px" }}
        ></img>
        <Dropdown overlay={menu} placement="bottomCenter" arrow>
          <a
            className="ant-dropdown-link category"
            onClick={(e) => e.preventDefault()}
          >
            {args.menuLabel} <DownOutlined />
          </a>
        </Dropdown>
      </Space>
    </>
  );
};

const Categories = () => {
  return (
    <div className="categories">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align="middle">
        <Col className="gutter-row " span={3}>
          <Category
            imagesrc="./assets/images/clothing.png"
            menuLabel="Clothing"
          />
        </Col>
        <Col className="gutter-row " span={3}>
          <Category
            imagesrc="./assets/images/footwear.jpg"
            menuLabel="Footwear"
          />
        </Col>
        <Col className="gutter-row " span={3}>
          <Category imagesrc="./assets/images/bags.png" menuLabel="Bags" />
        </Col>
      </Row>
    </div>
  );
};

export default Categories;
