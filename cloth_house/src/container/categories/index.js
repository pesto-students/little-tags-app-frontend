import React,{ useEffect } from "react";
import "./categories.css";
import TopHeader from "../../components/TopHeader";
import Categories from "../../components/Categories";
import { useParams } from "react-router-dom";
import SmileBagFooter from "../../components/Footer";
import { injectIntl } from "react-intl";
import {fetchCategories,fetchCategoriesFailure,fetchCategoriesSuccess} from "../../redux/action";
import { useDispatch,useSelector } from 'react-redux'
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
  Spin,
  List,
} from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
const { Content } = Layout;
const { Panel } = Collapse;
const { Option } = Select;
const { Meta } = Card;

const data = [
  {
    productTitle: "Polo",
    productDescription: "T-Shirt",
    productPrice: 299,
    productDiscount: "33%",
    imgsrc: "https://rukminim1.flixcart.com/image/580/696/kjuby4w0/t-shirt/f/m/x/s-4057-4058-4129-fastcolors-original-imafzbjegphge6uu.jpeg"
  },
  {
    productTitle: "Polo",
    productDescription: "T-Shirt",
    productPrice: 299,
    productDiscount: "33%",
    imgsrc: "https://rukminim1.flixcart.com/image/580/696/kj4m0sw0-0/t-shirt/5/c/4/s-tsrt-303-reya-original-imafyrjprxpfbhqr.jpeg?q=50"
  },
  {
    productTitle: "Polo",
    productDescription: "T-Shirt",
    productPrice: 299,
    productDiscount: "33%",
    imgsrc: "https://rukminim1.flixcart.com/image/580/696/kfmv9u80-0/t-shirt/o/2/5/m-brdblhenful-z14-blive-original-imafwfqfkcbddqkh.jpeg?q=50"
  },
  {
    productTitle: "Polo",
    productDescription: "T-Shirt",
    productPrice: 299,
    productDiscount: "33%",
    imgsrc: "https://rukminim1.flixcart.com/image/580/696/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=50"
  },
  {
    productTitle: "Polo",
    productDescription: "T-Shirt",
    productPrice: 299,
    productDiscount: "33%",
    imgsrc: "https://rukminim1.flixcart.com/image/580/696/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=50"
  },
  {
    productTitle: "Polo",
    productDescription: "T-Shirt",
    productPrice: 299,
    productDiscount: "33%",
    imgsrc: "https://rukminim1.flixcart.com/image/580/696/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=50"
  },
  {
    productTitle: "Polo",
    productDescription: "T-Shirt",
    productPrice: 299,
    productDiscount: "33%",
    imgsrc: "https://rukminim1.flixcart.com/image/580/696/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=50"
  },
  {
    productTitle: "Polo",
    productDescription: "T-Shirt",
    productPrice: 299,
    productDiscount: "33%",
    imgsrc: "https://rukminim1.flixcart.com/image/580/696/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=50"
  },
];

function CollapseMenu(args) {
  return (
    <>
      <Collapse
        bordered={true}
        className="submenuHeadRow"
        accordion
        expandIcon={({ isActive }) =>
          isActive ? (
            <MinusCircleOutlined style={{ fontSize: "16px", color: "#08c" }} />
          ) : (
            <PlusCircleOutlined style={{ fontSize: "16px", color: "#08c" }} />
          )
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
        cover={<Image width={300} height={300} src={args.imgsrc}></Image>}
      >
        <Row justify="space-between" align="middle">
          <Col>
            <div onClick={()=>{args.history&&
            args.history.push(`/detail/${args.category}/${args.productname}`)}}>
              <Meta
                title={args.productTitle}
                description={args.productDescription}
              />
            </div>
          </Col>
          <Col>
            <h2>{args.productPrice}</h2>
          </Col>
        </Row>
        <Divider></Divider>
        <Row justify="space-between" align="middle">
          <Col>
            <h3>{args.productDiscount}</h3>
          </Col>
          <Col>
            <Button
              type="primary"
              style={{
                borderColor: "#1a4d7c",
                backgroundColor: "#1a4d7c",
                color: "#1a4d7c",
                fontWeight: "bold",
                fontFamily: "Lato",
              }}
              ghost="true"
            >
              Add To Cart
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}

function CategoriesPage(props) {
  const categories=useSelector((state)=>state)
console.log("Home===>",categories);
const dispatch = useDispatch()
useEffect(()=>{
  console.log("abc");
dispatch(fetchCategories())
fetch("https://299b7901-79a5-4150-b143-f0af14279977.mock.pstmn.io/smilebag/products/clothing").then((res)=>res.json()).then((data)=>{
dispatch(fetchCategoriesSuccess(data))
}).catch(err=>{
  console.log(err)
  dispatch(fetchCategoriesFailure())
})
},[])
  //console.log("Home===>",props);
  let { categoryname } = useParams();
  return (
    <>
      <Layout className="layout">
        <TopHeader {...props} />
        <Content className="content">
          <Categories {...props} />
          <Divider style={{ margin: "auto" }}></Divider>
          <Row className="rowcontent">
            <Col className="gutter-row" span={4}>
              <Row justify="center" align="middle" className="mainHeadRow">
                <div className="categoryContent">{categoryname}</div>
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
              <List
              loading={true}
                grid={{ gutter: 0, column: 4 }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                      <ItemComponent
                      {...props}
                        {...item}
                        category={categoryname}
                        productname={categoryname}
                      />
                    </List.Item>
                )}
              />
            </Col>
          </Row>
        </Content>
        <SmileBagFooter {...props} />
      </Layout>
    </>
  );
}
export default injectIntl(CategoriesPage);
