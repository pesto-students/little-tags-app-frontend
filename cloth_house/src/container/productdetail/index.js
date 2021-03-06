import React,{ useEffect, useState } from "react";
import "./productdetail.css";
import TopHeader from "../../components/TopHeader";
import Categories from "../../components/Categories";
import { useParams } from "react-router-dom";
import SmileBagFooter from "../../components/Footer";
import { injectIntl } from "react-intl";
import _ from "underscore";
import {
  addToCart,
  fetchCategories,
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
  removeFromCart,
} from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
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
  Radio,
  Spin,
  Carousel 
} from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
const { Content } = Layout;
const { Option } = Select;

function BreadCrumHeader(args) {
  let href=`/category/${args.categoryname}`;
  return (
    <>
      <Breadcrumb separator=">">
      <a> <Breadcrumb.Item onClick={() => {
                args.history &&
                  args.history.push(
                    `/`
                  );
              }}>Home</Breadcrumb.Item></a>
        <a><Breadcrumb.Item style={{ textTransform:"capitalize"}} onClick={() => {
                args.history &&
                  args.history.push(
                    href
                  );
              }}>{args.categoryname}</Breadcrumb.Item></a>
        <a> <Breadcrumb.Item >{args.productname}</Breadcrumb.Item></a>
      </Breadcrumb>
    </>
  );
}

const data = [
  {
    title: 'Abhinav | 14 Nov 2020',
    rating:randomNumber(1,5),
    description:'Perfect size and quality Love it. Look forward to shop again.'
  },
  {
    title: 'Asiya | 28 Dec 2020',
    rating:randomNumber(1,5),
    description:'Great material ... One can buy as the color is cute...'
  },
  {
    title: 'Deepak Goel | 15 Sept 2020',
    rating:randomNumber(1,5),
    description:'Fitting was perfect.Colour expected..Comfortable..What else can you ask for on this price point???simply wow..bought it for my son..he loved it..u are gonna love it too'
  },
  {
    title: 'Twashti26 | June 2020',
    rating:randomNumber(1,5),
    description:`I loved the fabric. The product same as described on the site. It's just perfect! Thanks Myntra, you never disappoint.`
  },
];

async function getCategoryData(category) {
  const response = await fetch(
    "https://603db03a48171b0017b2d7b2.mockapi.io/" +
      category
  );
  // const resp = await response.json();
  return response;
}

function getOriginalPrice(price,discount){
      return Math.round(price/(1-(discount/100)));
}

function filterCategoryData(mapdata,id){
  
  if(mapdata.categories === undefined || mapdata.categories.categorydata === undefined || mapdata.categories.categorydata.data=== undefined){
    return {};
  }
  let data=mapdata.categories.categorydata.data;
  data=data.filter(x => x.id == id);
  return data.length>0?data[0]:{};
}
function randomNumber(min, max){
  const r = Math.random()*(max-min) + min
  return Math.floor(r)
}

function PlusMinusButton(args){
  const dispatch = useDispatch();
  return (<>
  <div className="plusminusbuttonborder">
            <Row justify="space-around" align="middle">
              <Col><MinusCircleOutlined className="minusbutton"  onClick={async () => { dispatch(removeFromCart(args.itemdata));}}/></Col>
              <Col><div className="cartcount">{args.itemdata.count}</div></Col>
              <Col><PlusCircleOutlined className="plusbutton"  onClick={async () => { dispatch(addToCart(args.itemdata));}}/></Col>
              
            </Row>
            </div>
  </>);
}

function AddToCartButton(args){
  const cartdata = useSelector(state => state.cart, _.isEqual);
  console.log("cart data =>",cartdata);
  let newcart=cartdata.items.filter(x => x.id == args.itemdata.id);
  const dispatch = useDispatch();
  return (<>{newcart.length>0?<PlusMinusButton itemdata={newcart[0]} />:
    <Button
      type="primary"
      size="large"
      style={{
        borderColor: "#1a4d7c",
        backgroundColor: "#1a4d7c",
        color: "white",
        fontWeight: "bold",
        fontFamily: "Lato",
      }}
      onClick={async () => { dispatch(addToCart(args.itemdata));}}>
      {args.intl&&args.intl.formatMessage({id:"app.components.cart.addtocart"})}
    </Button>
    }</>);
}
function ProductDetail(props) {
  let { categoryname, productname } = useParams();
  const categories = useSelector(state => state.catdata, _.isEqual);
  
  let productdetail=filterCategoryData(categories,productname);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    getCategoryData(categoryname)
      .then((res) => res.json())
      .then((data) => {
        
        dispatch(fetchCategoriesSuccess(data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchCategoriesFailure());
      });
  }, []);
  console.log("pdetail =>",productdetail);
  return (
    <>
        <TopHeader {...props} />
        <Spin spinning={categories.categories.loading} size="large">
        <Content className="content">
          <Categories {...props} />
          <Divider style={{ margin: "auto" }}></Divider>
          <div className="breadcrum">
            <BreadCrumHeader {...props} categoryname={categoryname} productname={productdetail.productTitle} />
          </div>
          <Row className="mainRow">
            <Col className="gutter-row" span={8}>
            <Carousel autoplay>
              {productdetail.imagegallery && productdetail.imagegallery.map((el) =>{
                  return (<div>
                  <Image width={400} height={500} src={el}></Image>
                </div>);
              })}
  </Carousel>
            </Col>
            <Col className="gutter-row" span={8} offset={2}>
              <Row>
                <h1 className="productTitle">{productdetail.productTitle}</h1>
              </Row>
              <Row>
                <h3 className="productTitle">{productdetail.productDescription}</h3>
              </Row>
              <br></br>
              <Row>
                <Space>
                  <Col>
                    <span className="productOfferPrice">₹{productdetail.productPrice}</span>
                  </Col>
                  <Col>
                    <span className="productOriginalPrice">₹{getOriginalPrice(productdetail.productPrice,productdetail.productDiscount)}</span>
                  </Col>
                  <Col>
                    <span className="productOffer">({productdetail.productDiscount}% off)</span>
                  </Col>
                </Space>
              </Row>
              <Row>
                <Rate  disabled defaultValue={randomNumber(1,5)} />
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
                <span className="productDelivery">Delivery in {randomNumber(1,5)} Days</span>
              </Row>
              <br></br>
              <Row>
                <AddToCartButton {...props} itemdata={productdetail}/>
              </Row>
            </Col>
            <Col  span={6}>
                <List
                header={<div className="reviewsHeader">{props.intl&&props.intl.formatMessage({id:"app.components.cart.reviews"})}</div>}
                  size="small"
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item className="reviewContent">
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={<>{item.title} <Rate disabled defaultValue={item.rating} /></>}
                        description={item.description}
                       
                      />
                    </List.Item>
                  )}
                />
            </Col>
          </Row>
        </Content>
        </Spin>
        {categories.categories.loading?<></>:<SmileBagFooter {...props} />} 
  
    </>
  );
}

export default injectIntl(ProductDetail);
