import React, { useEffect, useState } from "react";
import "./categories.css";
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
  addToWishlist
} from "../../redux/action";
import PlusMinusButton from "../../components/PlusMinus";
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
  Spin,
  List,
  Checkbox,
  Slider
} from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import {FaBeer} from "react-icons/fa"
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
    imgsrc:
      "https://rukminim1.flixcart.com/image/580/696/kjuby4w0/t-shirt/f/m/x/s-4057-4058-4129-fastcolors-original-imafzbjegphge6uu.jpeg",
  },
  {
    productTitle: "Polo",
    productDescription: "T-Shirt",
    productPrice: 299,
    productDiscount: "33%",
    imgsrc:
      "https://rukminim1.flixcart.com/image/580/696/kj4m0sw0-0/t-shirt/5/c/4/s-tsrt-303-reya-original-imafyrjprxpfbhqr.jpeg?q=50",
  },
  {
    productTitle: "Polo",
    productDescription: "T-Shirt",
    productPrice: 299,
    productDiscount: "33%",
    imgsrc:
      "https://rukminim1.flixcart.com/image/580/696/kfmv9u80-0/t-shirt/o/2/5/m-brdblhenful-z14-blive-original-imafwfqfkcbddqkh.jpeg?q=50",
  },
  {
    productTitle: "Polo",
    productDescription: "T-Shirt",
    productPrice: 299,
    productDiscount: "33%",
    imgsrc:
      "https://rukminim1.flixcart.com/image/580/696/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=50",
  },
  {
    productTitle: "Polo",
    productDescription: "T-Shirt",
    productPrice: 299,
    productDiscount: "33%",
    imgsrc:
      "https://rukminim1.flixcart.com/image/580/696/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=50",
  },
  {
    productTitle: "Polo",
    productDescription: "T-Shirt",
    productPrice: 299,
    productDiscount: "33%",
    imgsrc:
      "https://rukminim1.flixcart.com/image/580/696/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=50",
  },
  {
    productTitle: "Polo",
    productDescription: "T-Shirt",
    productPrice: 299,
    productDiscount: "33%",
    imgsrc:
      "https://rukminim1.flixcart.com/image/580/696/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=50",
  },
  {
    productTitle: "Polo",
    productDescription: "T-Shirt",
    productPrice: 299,
    productDiscount: "33%",
    imgsrc:
      "https://rukminim1.flixcart.com/image/580/696/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=50",
  },
];

function CollapseMenu(args) {

let menucontent=[{"header":"cat1","menu":["cat1","cat2","cat3"]},{"header":"cat2","menu":["cat1","cat2","cat3"]},{"header":"cat3","menu":["cat1","cat2","cat3"]}];
  if(args.category === "clothing"){
    menucontent=[{"header":"T-Shitrs","menu":["TShirts","Lounge T-Shirts"]},{"header":"Shitrs","menu":["Casual Shirts","Formal Shirts"]},{"header":"Jackets","menu":["Jackets","Rain Jacket"]}];
  }

  if(args.category === "footwear"){
    menucontent=[{"header":"Casual Shoes","menu":["Puma","Adidas"]},{"header":"Sports Shoes","menu":["Puma","Adidas","Nike"]},{"header":"Formal Shoes","menu":["Bata","Red Tape","Arrow"]}]
  }

  if(args.category === "bags"){
    menucontent=[{"header":"Backpacks","menu":["Wildcraft","Puma","F Gear"]},{"header":"Laptop Bags","menu":["Wildcraft","Puma","F Gear"]},{"header":"Handbags","menu":["Voylla","M Boss","F Gear"]}]
  }
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
        {menucontent.map((el,index) => { return (<Panel className="menuHeader"  header={el.header} key={index}>
          {el.menu.map((elmenu) => {return <p key={elmenu} className="menuContent"><Checkbox >{elmenu}</Checkbox></p> })}
          
        </Panel>)})}
      </Collapse>
    </>
  );
}

function BreadCrumHeader(args) {
  return (
    <>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="">{args.category}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}

function PriceChangeComponent(args){
  const dispatch = useDispatch();
  return (
    <>
    <Slider step={50} onChange={(val) => { dispatch(fetchCategories()); getCategoryData(args.category)
        .then((data) => {
          let filterdata=filterDataWithPrice(data.data,val[0],val[1])
          console.log(filterdata);
          data.data=filterdata;
          dispatch(fetchCategoriesSuccess(data));
        })
        .catch((err) => {
          console.log(err);
          dispatch(fetchCategoriesFailure());
        }); }} tipFormatter={(val) => `₹${val}`} range={{ draggableTrack: true }} min={100} max={2000} defaultValue={[400, 2000]} />
    </>);
}

function SortComponent(args) {
  const dispatch = useDispatch();
  return (
    <>
      <Select
        defaultValue="rel"
        bordered={false}
        onChange={(val) => { dispatch(fetchCategories()); getCategoryData(args.category)
        .then((data) => {
          sortCategoryData(data.data,val)
          dispatch(fetchCategoriesSuccess(data));
        })
        .catch((err) => {
          console.log(err);
          dispatch(fetchCategoriesFailure());
        }); }}
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
        <Option value="rel">Popularity</Option>
        <Option value={true}>Low to High</Option>
        <Option value={false}>High to Low</Option>
      </Select>
    </>
  );
}


function ItemComponent(args) {
  const dispatch = useDispatch();
  const cartdata = useSelector(state => state.cart, _.isEqual);
  let newcart=cartdata.items.filter(x => x.id == args.id);
  return (
    <>
      {" "}
      <Card
        hoverable
        cover={<Image width={250} height={280} src={args.imgsrc}></Image>}
      >
        <Row justify="space-between" align="middle">
          <Col>
            <div
            
              onClick={() => {
                args.history &&
                  args.history.push(
                    `/detail/${args.category}/${args.id}`
                  );
              }}
            >
              <Meta 
                title={args.productTitle}
                description={<div className="productdesc" title={args.productDescription}>{args.productDescription}</div>}
              />
            </div>
          </Col>
          <Col>
            <h2>₹{args.productPrice}</h2>
          </Col>
          <Col onClick={async () => { dispatch(addToWishlist(args.itemdata));}}>
          <FaBeer/>
          </Col>
        </Row>
        <Divider></Divider>
        <Row justify="space-between" align="middle">
          <Col>
            <h3>{args.productDiscount}% off</h3>
          </Col>
          <Col>
            {newcart.length>0?<PlusMinusButton itemdata={newcart[0]} />:
            <Button
            id="addToCart"
              type="primary"
              style={{
                borderColor: "#1a4d7c",
                backgroundColor: "#1a4d7c",
                color: "#1a4d7c",
                fontWeight: "bold",
                fontFamily: "Lato",
              }}
              ghost="true"
              onClick={async () => { dispatch(addToCart(args.itemdata));}}
            >
              Add To Cart
            </Button>
            }
          </Col>
        </Row>
      </Card>
    </>
  );
}

var catresponse;
async function getCategoryData(category) {
  if(typeof catresponse === "undefined" || typeof catresponse[category] === "undefined"){
    catresponse = await fetch(
      "https://603db03a48171b0017b2d7b2.mockapi.io/" +
        category
    );

    catresponse[category] = await catresponse.json();
    }
  return {...catresponse[category]};
}

function sortCategoryData(data,ascending){
  if(ascending==="rel"){
    return data;
  }
  if(ascending){
    return data.sort((a, b) => parseFloat(a.productPrice) - parseFloat(b.productPrice));
  }else{
    return data.sort((a, b) => parseFloat(b.productPrice) - parseFloat(a.productPrice));
  }
}

function filterDataWithPrice(data,min,max){
    return data.filter((item) => item.productPrice>=min && item.productPrice<=max);
}

function CategoriesPage(props) {
  const categories = useSelector(state => state.catdata, _.isEqual);
  let { categoryname } = useParams();
  //console.log("Home===>", categories);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("abc");
    dispatch(fetchCategories());
    getCategoryData(categoryname)
      .then((data) => {
        dispatch(fetchCategoriesSuccess(data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchCategoriesFailure());
      });
  }, [props.location]);
  
  
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
                <CollapseMenu category={categoryname} />
              </Row>
              <Divider></Divider>
              <Row justify="start" align="middle" style={{fontFamily:"Lato",fontWeight:"bold",fontSize:"18px",textAlign:"left"}}>
                <Col span={24}>
                  <span>Price:</span>
                  <PriceChangeComponent category={categoryname}/>
                </Col>
              
              </Row>
            </Col>
            <Col className="gutter-row" span={20}>
              <Row justify="end" align="middle" className="mainHeadRow">
                <Col style={{ padding: "5px" }} flex={2}>
                  <Row justify="start" align="top">
                    <BreadCrumHeader category={categoryname} />
                  </Row>
                  <Row justify="start" align="bottom">
                    <h2
                      style={{
                        fontFamily: "Lato",
                        fontWeight: "bold",
                        color: "grey",
                        textTransform:"capitalize"
                      }}
                    >
                      {categoryname}
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
                      <SortComponent category={categoryname}/>
                    </Space>
                  </Row>
                </Col>
              </Row>
              
              <List
              style={{paddingTop:"3px"}}
                loading={categories.categories.loading}
                grid={{ gutter: 0, column: 4 }}
                dataSource={
                  categories && categories.categories && categories.categories.categorydata && categories.categories.categorydata.data
                    ? categories.categories.categorydata.data
                    : []
                }
                renderItem={(item) => (
                  <List.Item>
                    <ItemComponent
                      {...props}
                      {...item}
                      itemdata={item}
                      category={categoryname}
                      productname={categoryname}
                    />
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Content>
        {categories.categories.loading?<></>:<SmileBagFooter {...props} />} 
      </Layout>
    </>
  );
}
export default injectIntl(CategoriesPage);
