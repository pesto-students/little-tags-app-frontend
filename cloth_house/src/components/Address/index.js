import React,{useState} from "react"; 
import {Row,Col,Button,Form,Select,Input} from "antd";
import Modal from "../Modal";
export default function AddressModal(props){
    const [addressModal,setAddressModal]=useState(false);
  const [address,setAddress]=useState({address:"B-45 first floor",street:"Laxmi nagar",
  city:"Delhi",pincode:110092});
const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const openAddressPopUp=()=>{
    setAddressModal(true)
  } 
  const handleOk=()=>{
 
    setAddressModal(false)
  }
 const onFinish=(data)=>{
   setAddress({address:data.address,street:data.street,city:data.city,pincode:data.pincode})
   setAddressModal(false)
   console.log("onFinis========>",data);
 }

const returnAddressForm=()=>{
    const {Option}=Select;
   return  <Form
    name="validate_other"
    {...formItemLayout}
    onFinish={onFinish}
    initialValues={{
      'input-number': 3,
      'checkbox-group': ['A', 'B'],
      rate: 3.5,
    }}
  >
  <Form.Item label={props.intl.formatMessage({id:"app.components.address.address"})}>
          <Form.Item name="address" initialValue={address.address} noStyle>
            <Input />
          </Form.Item> 
        </Form.Item>
  
        <Form.Item label={props.intl.formatMessage({id:"app.components.address.locality"})}>
          <Form.Item name="street"   initialValue={address.street}  noStyle>
            <Input />
          </Form.Item> 
        </Form.Item>
  
        <Form.Item
          name="city"
          label={props.intl.formatMessage({id:"app.components.address.city"})}
          hasFeedback
          initialValue={address.city}
          rules={[
            {
              required: true,
              message: props.intl.formatMessage({id:"app.components.address.addressError"}),
            },
          ]}
        >
          <Select placeholder={props.intl.formatMessage({id:"app.components.address.addressError"})}>
            <Option value="Delhi">Delhi</Option>
            <Option value="Haryana">Haryana</Option>
          </Select>
        </Form.Item>
  

        <Form.Item
          name="pincode"
          label={props.intl.formatMessage({id:"app.components.address.pincode"})}
          hasFeedback
          initialValue={address.pincode}
          rules={[
            {
              required: true,
              message: props.intl.formatMessage({id:"app.components.address.pincodeError"}),
            },
          ]}
        >
          <Select placeholder={props.intl.formatMessage({id:"app.components.address.pincodeError"})}>
            <Option value="110092">110092</Option>
            <Option value="110094">110094</Option>
          </Select>
        </Form.Item>
    
        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button type="primary" htmlType="submit">
            {props.intl.formatMessage({id:"app.components.address.submit"})}
          </Button>
        </Form.Item>  
  </Form>
   }

 const returnModal=()=>{
   return <Modal
    visible={addressModal}
    title={props.intl&&props.intl.formatMessage({
      id: "app.containers.Login.deliveryAddress"
    })}
    onOk={handleOk}
    handleCancel={handleOk}
    body={returnAddressForm()}
    footer={[]}
    callFrom="order" 
    />
 }

 return <Row>
 <Col  span={24}>
 <section className={"bgColor widthForSection"}>
       
      <div className="mainOrder">{props.intl.formatMessage({id:"app.containers.Login.deliveryAddress"})}</div> 
   <div className="subOrder">
   {`${address.address} ${address.street} ${address.city} - ${address.pincode} `} <Button onClick={openAddressPopUp}>{props.intl.formatMessage({id:"app.containers.Login.edit"})}</Button>
   </div>
   </section>
   {returnModal()}
 </Col>
</Row>
}