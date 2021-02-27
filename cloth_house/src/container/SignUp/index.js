import React,{useState} from "react";
import "./signup.css"
import Modal from "../../components/Modal"
import { 
  Form,
  Input,
  Tooltip,
  Select,
  Checkbox,
  Button,
 } from  "antd";
 import { QuestionCircleOutlined } from "@ant-design/icons";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = (props) => {
  const [form] = Form.useForm();
const [agreementModal,showAgreementModal]=useState(false)
//const agreementTitle="Customer Usage Agreement"
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    props.history.push('/login');
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const onClickAgreement=(e)=>{
      e.preventDefault()
      showAgreementModal(true)
  }
  const handleOk=()=>{
      showAgreementModal(false)
  }
  return (
      <div className={"alignCenter"}>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    ><p className="App">
    {props.intl.formatMessage({id:"appName"})}.{props.intl.formatMessage({id:"in"})}</p>
      <Form.Item
        name="email"
        label={props.intl.formatMessage({id:"app.containers.Login.email"})}
        rules={[
          {
            type: 'email',
            message: `The input is not valid ${props.intl.formatMessage({id:"app.containers.Login.email"})}!`,
          },
          {
            required: true,
            message: `${props.intl.formatMessage({id:"app.containers.SignUp.subCommon"})} ${props.intl.formatMessage({id:"app.containers.Login.email"})}!`,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label={props.intl.formatMessage({id:"app.containers.Login.password"})}
        rules={[
          {
            required: true,
            message: `${props.intl.formatMessage({id:"app.containers.SignUp.subCommon"})} ${props.intl.formatMessage({id:"app.containers.Login.password"})}!`,
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label={props.intl.formatMessage({id:"app.containers.SignUp.confirmPassword"})}
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message:`${props.intl.formatMessage({id:"app.containers.SignUp.confirmPasswordError"})}!`,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(`${props.intl.formatMessage({id:"app.containers.SignUp.passwordNotMatch"})}!`);
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="name"
        label={
          <span>
            {props.intl.formatMessage({id:"app.containers.SignUp.name"})}&nbsp;
            <Tooltip title={`${props.intl.formatMessage({id:"app.containers.SignUp.nameTitle"})}?`}>
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: `${props.intl.formatMessage({id:"app.containers.SignUp.subCommon"})} ${props.intl.formatMessage({id:"app.containers.SignUp.name"})}!`,
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

     

      <Form.Item
        name="phone"
        label={props.intl.formatMessage({id:"app.containers.SignUp.phoneNumber"})}
        rules={[
          {
            required: true,
            message: `${props.intl.formatMessage({id:"app.containers.SignUp.subCommon"})} ${props.intl.formatMessage({id:"app.containers.SignUp.phoneNumber"})}!`,
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

     
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(props.intl.formatMessage({id:"app.containers.SignUp.acceptAggrement"})),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          {props.intl.formatMessage({id:"app.containers.SignUp.readThe"})} <Button type="link" onClick={onClickAgreement}>{props.intl.formatMessage({id:"app.containers.SignUp.agreement"})}</Button>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          {props.intl.formatMessage({id:"app.containers.SignUp.register"})}
        </Button>
      </Form.Item>
    </Form>
   {agreementModal&& <Modal formatMessage={props.intl.formatMessage} visible={agreementModal} 
   body={props.intl.formatMessage({id:"app.containers.SignUp.acceptBody"})}
   title={props.intl.formatMessage({id:"app.containers.SignUp.acceptTitle"})}
   onOk={handleOk}
   handleCancel={handleOk}
   footer={[<Button key="submit" type="primary"  onClick={handleOk}>
   {props.intl.formatMessage({id:"app.containers.Login.close"})}
 </Button>]}
   />}
    </div>
  );
};

export default RegistrationForm;
