import React from   "react";
import { UserOutlined,LockOutlined } from "@ant-design/icons";
import {  Form, Input, Button, Checkbox,Row,Col  } from "antd";
import "./login.css"
const NormalLoginForm = (props) => { 
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    props.history.push('/home');
  };

  return (
    <Row>
    
      <Col className="padForLoginForm">
    <p className="alignLeft">
      {props.intl.formatMessage({id:"appName"})}.{props.intl.formatMessage({id:"in"})}</p>
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
            message: `${props.intl.formatMessage({id:"app.containers.SignUp.subCommon"})} ${props.intl.formatMessage({id:"app.containers.Login.email"})}!`,
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={props.intl.formatMessage({id:"app.containers.Login.email"})} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: `${props.intl.formatMessage({id:"app.containers.SignUp.subCommon"})} ${props.intl.formatMessage({id:"app.containers.Login.password"})}!`,
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder={props.intl.formatMessage({id:"app.containers.Login.password"})}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>{props.intl.formatMessage({id:"app.containers.Login.remember"})}  {props.intl.formatMessage({id:"app.containers.Login.me"})}</Checkbox>
        </Form.Item>

        <Button type="link" className="login-form-forgot" onClick={e=>{e.stopPropagation()
        props.history.push('/forgot-password')
        }}>
          {props.intl.formatMessage({id:"app.containers.Login.forgotPassword"})}
        </Button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
        {props.intl.formatMessage({id:"app.containers.Login.logIn"})}
        </Button>
        {props.intl.formatMessage({id:"app.containers.Login.or"})} <Button type="link" href="" onClick={(e)=>{
          e.preventDefault()
          props.history.push('/signup')
        }}>{props.intl.formatMessage({id:"app.containers.Login.registerNow"})}</Button>
      </Form.Item>
    </Form>
    </Col></Row>
  );
};



export default NormalLoginForm;