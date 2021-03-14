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
        <h4>{props.intl&&props.intl.formatMessage({id:"app.components.offers.footwear"})} <b>50% {props.intl&&props.intl.formatMessage({id:"app.components.offers.off"})}</b></h4>
        <div>
        <Button type="dashed" onClick={()=>{redirectTo("footwear")}}>{props.intl&&props.intl.formatMessage({id:"app.components.offers.shopnow"})}</Button>
        </div>
      </div>
    </div>
    <div  className="carouseloffers">
      <img width="100%" height="260px" src="./assets/images/offers/offerbg3.jpg"></img>
      <div className="offertextboxleft">
      <h2>Shirts</h2>
        <h4>{props.intl&&props.intl.formatMessage({id:"app.components.offers.clothing"})} <b>30% {props.intl&&props.intl.formatMessage({id:"app.components.offers.off"})}</b></h4>
        <div>
        <Button type="dashed" onClick={()=>{redirectTo("clothing")}}>{props.intl&&props.intl.formatMessage({id:"app.components.offers.shopnow"})}</Button>
        </div>
      </div>
    </div>
    <div  className="carouseloffers">
      <img width="100%" height="260px" src="./assets/images/offers/offerbg5.jpg"></img>
      <div className="offertextboxright">
      <h2>Jeans</h2>
        <h4>{props.intl&&props.intl.formatMessage({id:"app.components.offers.jeans"})} <b>55% {props.intl&&props.intl.formatMessage({id:"app.components.offers.off"})}</b></h4>
        <div>
        <Button type="dashed" onClick={()=>{redirectTo("clothing")}}>{props.intl&&props.intl.formatMessage({id:"app.components.offers.shopnow"})}</Button>
        </div>
      </div>
    </div>
    <div  className="carouseloffers">
      <img width="100%" height="260px" src="./assets/images/offers/offerbg6.jpg"></img>
      <div className="offertextboxleft">
      <h2>Sunglasses</h2>
        <h4>{props.intl&&props.intl.formatMessage({id:"app.components.offers.sunglasses"})} <b>55% {props.intl&&props.intl.formatMessage({id:"app.components.offers.off"})}</b></h4>
        <div>
        <Button type="dashed" onClick={()=>{redirectTo("bags")}}>{props.intl&&props.intl.formatMessage({id:"app.components.offers.shopnow"})}</Button>
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
    <Card.Meta title={args.offertitle} description={args.intl&&args.intl.formatMessage({id:"app.components.offers.shopnow"})} />
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
     <Row justify="space-around" align="middle">
         <Col span={8}> 
         <OfferCard {...args} offertitle={args.intl&&args.intl.formatMessage({id:"app.components.offers.card.shoes"})} offerimg="./assets/images/offers/shoesoffer.jpg" />
         </Col>
         <Col span={8}> 
         <OfferCard {...args} offertitle={args.intl&&args.intl.formatMessage({id:"app.components.offers.card.tshirts"})}  offerimg="./assets/images/offers/shirts.jpg"/>
         </Col>
         <Col span={8}> 
         <OfferCard {...args} offertitle={args.intl&&args.intl.formatMessage({id:"app.components.offers.card.casuals"})} offerimg="./assets/images/offers/casuals.jpg"/>
         </Col>
     </Row>
    </div>);
};

export {CarouselOffers,Offers};
export default CarouselOffers;