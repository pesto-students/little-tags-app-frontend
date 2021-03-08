import React from   "react";
import { UserOutlined,LockOutlined } from "@ant-design/icons";
import {  Form, Input, Button, Checkbox,Row,Col, Space,Layout  } from "antd";
import TopHeader from "../../components/TopHeader";
import SmileBagFooter from "../../components/Footer";
import "./login.css";
import SocialLogin from "./socialLogin";

const { Content } = Layout;
const NormalLoginForm = (props) => { 

  console.log("FacebookLogin========>");
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    props.history.push('/home');
  };

  return (

    <>
      <Layout className="layout">
        <TopHeader {...props} />
        <Content className="content">
    <Row>
    
      <Col className="padForLoginForm">
       <Space direction="vertical" align="center">
    <SocialLogin {...props}></SocialLogin>
    
    <h2>{props.intl&&props.intl.formatMessage({id:"app.containers.Login.or"})}</h2>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: `${props.intl&&props.intl.formatMessage({id:"app.containers.SignUp.subCommon"})} ${props.intl&&props.intl.formatMessage({id:"app.containers.Login.email"})}!`,
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={props.intl&&props.intl.formatMessage({id:"app.containers.Login.email"})} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: `${props.intl&&props.intl.formatMessage({id:"app.containers.SignUp.subCommon"})} ${props.intl&&props.intl.formatMessage({id:"app.containers.Login.password"})}!`,
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder={props.intl&&props.intl.formatMessage({id:"app.containers.Login.password"})}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>{props.intl&&props.intl.formatMessage({id:"app.containers.Login.remember"})}  {props.intl&&props.intl.formatMessage({id:"app.containers.Login.me"})}</Checkbox>
        </Form.Item>

        <Button type="link" className="login-form-forgot" onClick={e=>{e.stopPropagation()
        props.history.push('/forgot-password')
        }}>
          {props.intl&&props.intl.formatMessage({id:"app.containers.Login.forgotPassword"})}
        </Button>
      </Form.Item>

      <Form.Item>
        <Space>
        <Button type="primary" htmlType="submit" className="login-form-button">
        {props.intl&&props.intl.formatMessage({id:"app.containers.Login.logIn"})}
        </Button>
        {props.intl&&props.intl.formatMessage({id:"app.containers.Login.or"})}<Button type="link" href="" onClick={(e)=>{
          e.preventDefault()
          props.history.push('/signup')
        }}>{props.intl&&props.intl.formatMessage({id:"app.containers.Login.registerNow"})}</Button>
        </Space>
      </Form.Item>
    </Form>
    </Space> 
    </Col></Row>
    </Content>
        
      </Layout>
      <SmileBagFooter {...props} className={"positionFixed"}/>
      </>
  );
};



export default NormalLoginForm;