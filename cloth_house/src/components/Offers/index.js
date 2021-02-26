import { React,useContext } from "react";
import { Input, Row, Col, Select, Space, Menu, Dropdown, Button, Carousel ,Card  } from "antd";
import { DownOutlined } from "@ant-design/icons";
import LangContext,{langOptions} from "../../context/LangContext.js"
import { injectIntl } from "react-intl";
import "./offers.css";


const CarouselOffers =(args) =>{
    return (<>
    <Carousel autoplay>
    <div>
      <h3 className="carouseloffers">Offer 1</h3>
    </div>
    <div>
      <h3 className="carouseloffers">Offer 2</h3>
    </div>
    <div>
      <h3 className="carouseloffers">Offer 3</h3>
    </div>
    <div>
      <h3 className="carouseloffers">Offer 4</h3>
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

const Offers = (args) => {
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