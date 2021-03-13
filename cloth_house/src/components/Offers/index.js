import { React } from "react";
import {  Row, Col,  Carousel ,Card, Button  } from "antd";
// import { DownOutlined } from "@ant-design/icons";
// import LangContext,{langOptions} from "../../context/LangContext.js"
// import { injectIntl } from "react-intl";
import "./offers.css";


const CarouselOffers =(props) =>{
console.log("CarouselOffers=========>",props);
  const redirectTo=(args)=>{
    if(args==="footwear")
    props.history.push("/category/footwear")

    if(args==="clothing")
    props.history.push("/category/clothing")

    if(args==="bags")
    props.history.push("/category/bags")
  }

    return (<>
    <Carousel dotPosition="right" autoplay>
    <div  className="carouseloffers">
      <img width="100%" height="260px" src="./assets/images/offers/offerbg2.jpg"></img>
      <div className="offertextboxright">
        <h2>Footwear</h2>
        <h4>Shop Footwear now at <b>50% off</b></h4>
        <div>
        <Button type="dashed" onClick={()=>{redirectTo("footwear")}}>Shop Now</Button>
        </div>
      </div>
    </div>
    <div  className="carouseloffers">
      <img width="100%" height="260px" src="./assets/images/offers/offerbg3.jpg"></img>
      <div className="offertextboxleft">
      <h2>Shirts</h2>
        <h4>Shop Shirts now at <b>30% off</b></h4>
        <div>
        <Button type="dashed" onClick={()=>{redirectTo("clothing")}}>Shop Now</Button>
        </div>
      </div>
    </div>
    <div  className="carouseloffers">
      <img width="100%" height="260px" src="./assets/images/offers/offerbg5.jpg"></img>
      <div className="offertextboxright">
      <h2>Jeans</h2>
        <h4>Shop Jeans now at <b>55% off</b></h4>
        <div>
        <Button type="dashed" onClick={()=>{redirectTo("clothing")}}>Shop Now</Button>
        </div>
      </div>
    </div>
    <div  className="carouseloffers">
      <img width="100%" height="260px" src="./assets/images/offers/offerbg6.jpg"></img>
      <div className="offertextboxleft">
      <h2>Sunglasses</h2>
        <h4>Shop Sunglasses now at <b>55% off</b></h4>
        <div>
        <Button type="dashed" onClick={()=>{redirectTo("bags")}}>Shop Now</Button>
        </div>
      </div>
    </div>
  </Carousel>
    </>);
}



const OfferCard =(args) => {

  

    return (<>
    <Card
    hoverable
    style={{ width: 400 }}
    cover={<img alt="example" src={args.offerimg} />}
    
  >
    <Card.Meta title={args.offertitle} description="Shop Now" />
  </Card>,
    </>);
}

const Offers = (args) => {
  const redirectTo=(path)=>{
    if(args==="footwear")
    args.history.push("/category/footwear")

    if(path==="clothing")
    args.history.push("/category/clothing")

    if(args==="bags")
    args.history.push("/category/bags")
  }

    return (<div className="offerscards" onClick={()=>redirectTo("clothing")}> 
     <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-around" align="middle">
         <Col span={8}> 
         <OfferCard offertitle="Shoes @ 30%off" offerimg="./assets/images/offers/shoesoffer.jpg" />
         </Col>
         <Col span={8}> 
         <OfferCard offertitle="T-Shirts @ 70%off"  offerimg="./assets/images/offers/shirts.jpg"/>
         </Col>
         <Col span={8}> 
         <OfferCard offertitle="Casuals @ 70%off" offerimg="./assets/images/offers/casuals.jpg"/>
         </Col>
     </Row>
    </div>);
};

export {CarouselOffers,Offers};
export default CarouselOffers;