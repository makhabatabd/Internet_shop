import React from "react";
import { Button, Select, Form, Input, InputNumber } from "antd";
import { brands } from "../../helpers/brands";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { productsContext } from "../../contexts/productsContext";
import { useEffect } from "react";

const EditProduct = () => {
  const params = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  console.log(oneProduct);
  return (
    <div className="container">
      <h2>Edit product</h2>
      <Form
        layout="vertical"
        name="basic"
        //   onFinish={save}>
      >
        <Form.Item
          label="Brand"
          name="brand"
          rules={[
            {
              required: true,
              message: "Please input brand",
            },
          ]}
        >
          <Select>
            {brands.map((item) => {
              return (
                <Select.Option key={item.id} value={item.brand}>
                  {item.brand}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="Model"
          name="model"
          rules={[
            {
              required: true,
              message: "Please input model",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input description",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input price",
            },
          ]}
        >
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item
          label="Image 1"
          name="image1"
          rules={[
            {
              required: true,
              message: "Please input URL of image 1!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Image 2"
          name="image2"
          rules={[
            {
              required: true,
              message: "Please input URL of image 2!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Video"
          name="video"
          rules={[
            {
              required: true,
              message: "Please input URL of video!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProduct;
