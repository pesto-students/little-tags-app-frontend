import React, { useState } from "react";
import "./signup.css";
import Modal from "../../components/Modal";
import TopHeader from "../../components/TopHeader";
import SmileBagFooter from "../../components/Footer";
import {
  Form,
  Input,
  Tooltip,
  Select,
  Checkbox,
  Button,
  Layout,
  Space,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
const { Option } = Select;
const { Content } = Layout;

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
  const [agreementModal, showAgreementModal] = useState(false);
  //const agreementTitle="Customer Usage Agreement"
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    props.history.push("/login");
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const onClickAgreement = (e) => {
    e.preventDefault();
    showAgreementModal(true);
  };
  const handleOk = () => {
    showAgreementModal(false);
  };
  return (
    <>
      <Layout className="layout">
        <TopHeader {...props} />
        <Content className="content">
          <div className={"alignCenter"}>
            <Space direction="vertical" align="center">
             
               {/* <SocialLogin {...props}></SocialLogin> */}
      
              
              {/* <h2>
                {props.intl&&props.intl.formatMessage({ id: "app.containers.Login.or" })}
              </h2> */}
              <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                  residence: ["zhejiang", "hangzhou", "xihu"],
                  prefix: "+91",
                }}
                scrollToFirstError
              >
                <Form.Item
                  name="email"
                  label={props.intl&&props.intl.formatMessage({
                    id: "app.containers.Login.email",
                  })}
                  rules={[
                    {
                      type: "email",
                      message: `The input is not valid ${props.intl&&props.intl.formatMessage(
                        { id: "app.containers.Login.email" }
                      )}!`,
                    },
                    {
                      required: true,
                      message: `${props.intl&&props.intl.formatMessage({
                        id: "app.containers.SignUp.subCommon",
                      })} ${props.intl&&props.intl.formatMessage({
                        id: "app.containers.Login.email",
                      })}!`,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="password"
                  label={props.intl&&props.intl.formatMessage({
                    id: "app.containers.Login.password",
                  })}
                  rules={[
                    {
                      required: true,
                      message: `${props.intl&&props.intl.formatMessage({
                        id: "app.containers.SignUp.subCommon",
                      })} ${props.intl&&props.intl.formatMessage({
                        id: "app.containers.Login.password",
                      })}!`,
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  label={props.intl&&props.intl.formatMessage({
                    id: "app.containers.SignUp.confirmPassword",
                  })}
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: `${props.intl&&props.intl.formatMessage({
                        id: "app.containers.SignUp.confirmPasswordError",
                      })}!`,
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          `${props.intl&&props.intl.formatMessage({
                            id: "app.containers.SignUp.passwordNotMatch",
                          })}!`
                        );
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
                      {props.intl&&props.intl.formatMessage({
                        id: "app.containers.SignUp.name",
                      })}
                      &nbsp;
                      <Tooltip
                        title={`${props.intl&&props.intl.formatMessage({
                          id: "app.containers.SignUp.nameTitle",
                        })}?`}
                      >
                        <QuestionCircleOutlined />
                      </Tooltip>
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: `${props.intl&&props.intl.formatMessage({
                        id: "app.containers.SignUp.subCommon",
                      })} ${props.intl&&props.intl.formatMessage({
                        id: "app.containers.SignUp.name",
                      })}!`,
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label={props.intl&&props.intl.formatMessage({
                    id: "app.containers.SignUp.phoneNumber",
                  })}
                  rules={[
                    {
                      required: true,
                      message: `${props.intl&&props.intl.formatMessage({
                        id: "app.containers.SignUp.subCommon",
                      })} ${props.intl&&props.intl.formatMessage({
                        id: "app.containers.SignUp.phoneNumber",
                      })}!`,
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              props.intl&&props.intl.formatMessage({
                                id: "app.containers.SignUp.acceptAgreement",
                              })
                            ),
                    },
                  ]}
                  {...tailFormItemLayout}
                >
                  <Checkbox>
                    {props.intl&&props.intl.formatMessage({
                      id: "app.containers.SignUp.readThe",
                    })}{" "}
                    <Button type="link" onClick={onClickAgreement}>
                      {props.intl&&props.intl.formatMessage({
                        id: "app.containers.SignUp.agreement",
                      })}
                    </Button>
                  </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    {props.intl&&props.intl.formatMessage({
                      id: "app.containers.SignUp.register",
                    })}
                  </Button>
                </Form.Item>
              </Form>
              {agreementModal && (
                <Modal
                  {...props}
                  visible={agreementModal}
                  body={props.intl&&props.intl.formatMessage({
                    id: "app.containers.SignUp.acceptBody",
                  })}
                  title={props.intl&&props.intl.formatMessage({
                    id: "app.containers.SignUp.acceptTitle",
                  })}
                  onOk={handleOk}
                  handleCancel={handleOk}
                  footer={[
                    <Button key="submit" type="primary" onClick={handleOk}>
                      {props.intl&&props.intl.formatMessage({
                        id: "app.containers.Login.close",
                      })}
                    </Button>,
                  ]}
                />
              )}
            </Space>
          </div>
        </Content>
        <SmileBagFooter {...props} className={"positionFixed"} />
      </Layout>
    </>
  );
};

export default RegistrationForm;
