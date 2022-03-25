import { ShoppingCartOutlined } from "@ant-design/icons/lib/icons";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div></div>
        <Link to="/">
          <img
            src="https://content.thewosgroup.com/wosus/logo/wos_since_1924_uk_blk_notag.svg"
            alt="logo"
            width="200px"
          />
        </Link>
        <Link to="/cart">
          <ShoppingCartOutlined
            style={{
              fontSize: "30px",
              color: "black",
            }}
          />
        </Link>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
