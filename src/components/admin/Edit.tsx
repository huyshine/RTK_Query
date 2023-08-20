import React, { useEffect } from "react";

import { Button, Checkbox, Form, Input } from "antd";
import { useAddProductMutation, useEditProductMutation, useGetDetailQuery } from "@/api/product";
import { useNavigate, useParams } from "react-router-dom";
import checkAuthen from "@/utils/checkAuthen";

const Edit = () => {
  const [editProduct] = useEditProductMutation();
  const { id } = useParams();
  const { data: product } = useGetDetailQuery(id || "")
  const navigate = useNavigate();
  const [form] = Form.useForm()
  useEffect(()=>{
    form.setFieldsValue(product)
  }, [product])
  const onFinish = (values: any) => {
    // console.log('Success:', values);
    editProduct({id: product?.id, data: values });
    alert('Update sản phẩm thành công')
    navigate("/admin/products");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  checkAuthen()


  return (
    <div>
      <Form
        form={form}
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
            // { type: "number", message: "Please enter a number" },
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
            Update sản phẩm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Edit;
