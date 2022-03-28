import React, { useState, useEffect } from "react";
import { List, message, Avatar } from "antd";
import VirtualList from "rc-virtual-list";
import { useContext } from "react";
import { productsContext } from "../../contexts/productsContext";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const { products, getProducts, deleteProduct } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <List>
      <VirtualList data={products} itemHeight={47} itemKey="email">
        {(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={<Avatar src={item.image1} />}
              title={
                <a href="#">
                  {item.brand}, {item.model}
                </a>
              }
            />
            <a onClick={() => deleteProduct(item.id)}>Delete</a>
            <Link to={`/edit/${item.id}`} style={{ margin: "auto 20px" }}>
              Edit
            </Link>
            <Link to={`/products/${item.id}`}>Details</Link>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};

export default AdminProducts;
