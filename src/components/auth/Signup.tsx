import React from "react";

import { Button, Checkbox, Form, Input, message } from "antd";
import { useSignupMutation } from "@/api/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signup, { error }] = useSignupMutation();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    signup(values)
      .unwrap()
      .then(() => {
        messageApi.open({
          type: "success",
          content: "Đăng ký tk thành công",
        });
        navigate(`/`);
      });
    // console.log("Success:", values);
  };
  if (error) {
    if ("data" in error) {
      messageApi.open({
        type: "error",
        content: error?.data,
      });
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
        <header>
            <h1>Đăng ký</h1>
        </header>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {contextHolder}
        <Form.Item
          label="email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter your email" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" danger htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
