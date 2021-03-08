import React from "react";
import "./productdetail.css";
import TopHeader from "../../components/TopHeader";
import Categories from "../../components/Categories";
import { useParams } from "react-router-dom";
import SmileBagFooter from "../../components/Footer";
import { injectIntl } from "react-intl";
import {
  Layout,
  Divider,
  Row,
  Col,
  Button,
  Collapse,
  Breadcrumb,
  Select,
  Space,
  Card,
  Image,
  Rate,
  Avatar,
  List,
  Radio
} from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
const { Content } = Layout;
const { Option } = Select;

function BreadCrumHeader() {
  return (
    <>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="">Footwear</Breadcrumb.Item>
        <Breadcrumb.Item>Sandals</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}

const data = [
  {
    title: 'Review 1',
    rating:2,
    description:'average quality'
  },
  {
    title: 'Review 2',
    rating:2,
    description:'average quality'
  },
  {
    title: 'Review 3',
    rating:2,
    description:'average quality'
  },
  {
    title: 'Review 4',
    rating:2,
    description:'average quality'
  },
];

function ProductDetail(props) {
  let { categoryname, productname } = useParams();
  return (
    <>
        <TopHeader {...props} />
        <Content className="content">
          <Categories {...props} />
          <Divider style={{ margin: "auto" }}></Divider>
          <div className="breadcrum">
            <BreadCrumHeader />
          </div>
          <Row className="mainRow">
            <Col className="gutter-row" span={8}>
              <Image
                width={400}
                height={400}
                src="https://rukminim1.flixcart.com/image/580/696/kjuby4w0/t-shirt/f/m/x/s-4057-4058-4129-fastcolors-original-imafzbjegphge6uu.jpeg?q=50"
              ></Image>
            </Col>
            <Col className="gutter-row" span={8} offset={2}>
              <Row>
                <h1 className="productTitle">Title</h1>
              </Row>
              <Row>
                <h3 className="productTitle">Sub Title</h3>
              </Row>
              <br></br>
              <Row>
                <Space>
                  <Col>
                    <span className="productOfferPrice">₹299</span>
                  </Col>
                  <Col>
                    <span className="productOriginalPrice">₹1299</span>
                  </Col>
                  <Col>
                    <span className="productOffer">(59% off)</span>
                  </Col>
                </Space>
              </Row>
              <Row>
                <Rate value="3" />
              </Row>
              <br></br>
              <Row>
                <Space>
                  <Col>
                    <span className="productSizeHead">Size</span>
                  </Col>
                  <Col>
                  <Radio.Group defaultValue="L" size="large">
      <Radio.Button className="productSize" value="L">L</Radio.Button>
      <Radio.Button  className="productSize" value="M">M</Radio.Button>
      <Radio.Button className="productSize" value="S">S</Radio.Button>
      <Radio.Button  className="productSize" value="XS">XS</Radio.Button>
    </Radio.Group>
                  </Col>
                </Space>
              </Row>
              <br></br>
              <Row>
                <span className="productDelivery">Delivery in 5 Days</span>
              </Row>
              <br></br>
              <Row>
                <Button
                  size="large"
                  type="primary"
                  style={{
                    borderColor: "#1a4d7c",
                    backgroundColor: "#1a4d7c",
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "Lato",
                  }}
                >
                  Add To Cart
                </Button>
              </Row>
            </Col>
            <Col  span={6}>
                <List
                header={<div className="reviewsHeader">Reviews</div>}
                  size="small"
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item className="reviewContent">
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={<a href="#">{item.title} <Rate value={item.rating} /></a>}
                        description={item.description}
                       
                      />
                    </List.Item>
                  )}
                />
            </Col>
          </Row>
        </Content>
        <SmileBagFooter {...props} className={"positionFixed"} />
  
    </>
  );
}

export default injectIntl(ProductDetail);
