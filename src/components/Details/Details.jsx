import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Loading from "../Loading/Loading";
import { Button, Carousel } from "antd";

const Details = () => {
  const { oneProduct, getOneProduct } = useContext(productsContext);
  const params = useParams();
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  console.log(oneProduct);
  return oneProduct ? (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ width: "35vw" }}>
          <Carousel autoplay>
            <div>
              <img width="100%" src={oneProduct.image1} alt="first-image" />
            </div>
            <div>
              <img width="100%" src={oneProduct.image2} alt="second-image" />
            </div>
          </Carousel>
        </div>
        <div style={{ width: "40vw" }}>
          <h2>{oneProduct.brand}</h2>
          <h3>{oneProduct.model}</h3>
          <h2>{"$ " + oneProduct.price}</h2>
          <Button size="large" style={{ width: "100%", margin: "15px auto" }}>
            Add to cart
          </Button>
          <div>{oneProduct.description}</div>
        </div>
      </div>
      <video src={oneProduct.video} autoPlay loop muted width="100%"></video>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
