import React from "react";
import "./categories.css";
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
  Image
} from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
const { Content } = Layout;
const { Panel } = Collapse;
const { Option } = Select;
const { Meta } = Card;

function CollapseMenu(args) {
  return (
    <>
      <Collapse
        bordered={true}
        className="submenuHeadRow"
        accordion
        expandIcon={({ isActive }) =>
          isActive ? <MinusCircleOutlined style={{ fontSize: '16px', color: '#08c' }}/> : <PlusCircleOutlined style={{ fontSize: '16px', color: '#08c' }} />
        }
      >
        <Panel header="Flipflops" key="1">
          <p className="menuContent">Cat1</p>
        </Panel>
        <Panel header="Shoes" key="2">
          <p>Cat1</p>
        </Panel>
        <Panel header="Sandals" key="3">
          <p>Cat1</p>
        </Panel>
      </Collapse>
    </>
  );
}

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

function SortComponent() {
  return (
    <>
      <Select
        defaultValue="popularity"
        bordered={false}
        size="large"
        style={{
          width: 220,
          marginBottom: "7px",
          borderStyle: "dashed",
          borderColor: "#3d5489",
          borderWidth: "2px",
          borderRadius: "5px",
        }}
      >
        <Option value="popularity">Popularity</Option>
        <Option value="lucy">Low to High</Option>
        <Option value="Yiminghe">High to Low</Option>
      </Select>
    </>
  );
}

function ItemComponent(args) {
  return (
    <>
      {" "}
      <Card
        hoverable
        cover={
          <Image
      width={300} height={300} src={args.imgsrc}></Image>
          
        }
      >
        
        <Row justify="space-between" align="middle">
          <Col>
          <Meta title="Polo" description="T-Shirt" />
          </Col>
          <Col>
          <h2>₹299</h2>
          </Col>
        </Row>
        <Divider></Divider>
        <Row justify="space-between" align="middle">
        <Col>
          <h3>33% Off</h3>
          </Col>
          <Col>
          <Button type="primary" style={{borderColor:"#1a4d7c",backgroundColor:"#1a4d7c",color:"#1a4d7c",fontWeight:"bold",fontFamily:"Lato" }} ghost="true" >Add To Cart</Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}

function CategoriesPage(props) {
  //console.log("Home===>",props);
  let { pagename } = useParams();
  return (
    <>
      <Layout className="layout">
        <TopHeader {...props} />
        <Content className="content">
          <Categories {...props}/>
          <Divider style={{ margin: "auto" }}></Divider>
          <Row
            className="rowcontent"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={4}>
              <Row justify="center" align="middle" className="mainHeadRow">
                <div className="categoryContent">{pagename}</div>
              </Row>

              <Row justify="center" align="middle">
                <CollapseMenu />
              </Row>
            </Col>
            <Col className="gutter-row" span={20}>
              <Row justify="end" align="middle" className="mainHeadRow">
                <Col style={{ padding: "5px" }} flex={2}>
                  <Row justify="start" align="top">
                    <BreadCrumHeader />
                  </Row>
                  <Row justify="start" align="bottom">
                    <h2
                      style={{
                        fontFamily: "Lato",
                        fontWeight: "bold",
                        color: "grey",
                      }}
                    >
                      Sandals
                    </h2>
                  </Row>
                </Col>
                <Col style={{ padding: "5px" }} flex={3}>
                  <Row justify="end" align="middle">
                    <Space>
                      <h4
                        style={{
                          fontFamily: "Lato",
                          fontWeight: "bold",
                          color: "grey",
                        }}
                      >
                        Sort By{" "}
                      </h4>{" "}
                      <SortComponent />
                    </Space>
                  </Row>
                </Col>
              </Row>
              <Row gutter={[8, 8]} style={{ paddingTop: "5px" }}>
                <Col span={6}>
                  <ItemComponent imgsrc="https://rukminim1.flixcart.com/image/580/696/kjuby4w0/t-shirt/f/m/x/s-4057-4058-4129-fastcolors-original-imafzbjegphge6uu.jpeg?q=50" />
                </Col>
                <Col span={6}>
                  <ItemComponent imgsrc="https://rukminim1.flixcart.com/image/580/696/kg9qbgw0-0/t-shirt/c/0/7/s-shp395402-shapphr-original-imafwjx7tnbqqqhz.jpeg?q=50"/>
                </Col>
                <Col span={6}>
                  <ItemComponent imgsrc="https://rukminim1.flixcart.com/image/580/696/kcjexe80/t-shirt/z/3/z/xxl-tblogr-blylrnful-r5-tripr-original-imaftnf3ysmybnbh.jpeg?q=50"/>
                </Col>
                <Col span={6}>
                  <ItemComponent imgsrc="https://rukminim1.flixcart.com/image/580/696/kg9qbgw0-0/t-shirt/c/0/7/s-shp395402-shapphr-original-imafwjx7tnbqqqhz.jpeg?q=50"/>
                </Col>
                <Col span={6}>
                  <ItemComponent imgsrc="https://rukminim1.flixcart.com/image/580/696/kg9qbgw0-0/t-shirt/c/0/7/s-shp395402-shapphr-original-imafwjx7tnbqqqhz.jpeg?q=50" />
                </Col>
                <Col span={6}>
                  <ItemComponent imgsrc="https://rukminim1.flixcart.com/image/580/696/kg9qbgw0-0/t-shirt/c/0/7/s-shp395402-shapphr-original-imafwjx7tnbqqqhz.jpeg?q=50" />
                </Col>
                <Col span={6}>
                  <ItemComponent imgsrc="https://rukminim1.flixcart.com/image/580/696/kg9qbgw0-0/t-shirt/c/0/7/s-shp395402-shapphr-original-imafwjx7tnbqqqhz.jpeg?q=50" />
                </Col>
                <Col span={6}>
                  <ItemComponent  imgsrc="https://rukminim1.flixcart.com/image/580/696/kg9qbgw0-0/t-shirt/c/0/7/s-shp395402-shapphr-original-imafwjx7tnbqqqhz.jpeg?q=50" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
        <SmileBagFooter />
      </Layout>
    </>
  );
}
export default injectIntl(CategoriesPage);
