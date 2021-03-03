import { React } from "react";
import {  Row, Col,  Carousel ,Card, Button  } from "antd";
// import { DownOutlined } from "@ant-design/icons";
// import LangContext,{langOptions} from "../../context/LangContext.js"
// import { injectIntl } from "react-intl";
import "./offers.css";


const CarouselOffers =() =>{
    return (<>
    <Carousel autoplay>
    <div  className="carouseloffers">
      <img width="100%" height="300px" src="./assets/images/offers/yellowpic.jpg"></img>
      <div className="offertextboxright">
        <h2>Offer Heading</h2>
        <h4>Offer Sub Heading</h4>
        <div>
        <Button type="dashed">Shop Now</Button>
        </div>
      </div>
    </div>
    <div  className="carouseloffers">
      <img width="100%" height="300px" src="./assets/images/offers/mensuits.jpg"></img>
      <div className="offertextboxleft">
        <h2>Offer 2 Heading</h2>
        <h4>Offer 2 Sub Heading</h4>
        <div>
        <Button type="dashed">Shop Now</Button>
        </div>
      </div>
    </div>
    <div  className="carouseloffers">
      <img width="100%" height="300px" src="./assets/images/offers/bags.jpg"></img>
      <div className="offertextboxleft">
        <h2>Offer 3 Heading</h2>
        <h4>Offer 3 Sub Heading</h4>
        <div>
        <Button type="dashed">Shop Now</Button>
        </div>
      </div>
    </div>
    <div  className="carouseloffers">
      <img width="100%" height="300px" src="./assets/images/offers/sunglasses.jpg"></img>
      <div className="offertextboxleft">
        <h2>Offer 4 Heading</h2>
        <h4>Offer 4 Sub Heading</h4>
        <div>
        <Button type="dashed">Shop Now</Button>
        </div>
      </div>
    </div>
  </Carousel>
    </>);
}



const OfferCard =() => {
    return (<>
    <Card
    hoverable
    style={{ width: 400 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Card.Meta title="Bags 30% OFF" description="Shop Now" />
  </Card>,
    </>);
}

const Offers = () => {
    return (<div className="offerscards">
     <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-around" align="middle">
         <Col span={8}> 
         <OfferCard />
         </Col>
         <Col span={8}> 
         <OfferCard />
         </Col>
         <Col span={8}> 
         <OfferCard />
         </Col>
     </Row>
    </div>);
};

export {CarouselOffers,Offers};