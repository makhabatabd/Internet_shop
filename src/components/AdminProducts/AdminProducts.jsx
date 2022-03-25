import React, { useState, useEffect } from "react";
import { List, message, Avatar } from "antd";
import VirtualList from "rc-virtual-list";
import { useContext } from "react";
import { productsContext } from "../../contexts/productsContext";

const AdminProducts = () => {
  const { products, getProducts } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <List>
      <VirtualList
        // data={data}
        itemHeight={47}
        itemKey="email"
      >
        {(item) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description={item.email}
            />
            <div>Content</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};

export default AdminProducts;
