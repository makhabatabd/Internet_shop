import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Routing from "./Routing";
import ProductsContextProvider from "./contexts/productsContext";
import "./App.css";
function App() {
  return (
    <ProductsContextProvider>
      <Routing />
    </ProductsContextProvider>
  );
}

export default App;
