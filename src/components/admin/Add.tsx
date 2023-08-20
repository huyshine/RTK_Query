import React from "react";

import { Button, Checkbox, Form, Input } from "antd";
import { useAddProductMutation } from "@/api/product";
import { useNavigate } from "react-router-dom";
import checkAuthen from "@/utils/checkAuthen";

const Add = () => {
  const [addProduct] = useAddProductMutation();
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    // console.log('Success:', values);
    addProduct({...values, image :"https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg"});
    alert('Add sản phẩm thành công')
    navigate("/admin/products");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  checkAuthen()


  return (
    <div>
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
        <Form.Item
          label="name"
          name="name"
          rules={[
            { required: true, message: "Please input your name!" },
            { min: 3, message: "Tối thiểu lớn hơn 3" },
            { whitespace: true, message: "Ko được để khoảng trống" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="price"
          name="price"
          rules={[
            { required: true, message: "Please input your price!" },
            // { type: "number", message: "Please enter a number" }
            // { min: 1, message: "Tối thiểu là 1" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="description"
          name="description"
          rules={[
            { required: true, message: "Please input your description!" },
            { whitespace: true, message: "Ko được để khoảng trống" },
            { min: 3, message: "Tối thiểu lớn hơn 3" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" danger htmlType="submit">
            Add sản phẩm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Add;
