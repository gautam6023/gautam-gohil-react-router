import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Nav = styled.div`
  height: 100px;
  width: 100%;
  background-color: #fffff;
  display: flex;
  color: black;

  div {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;

    .links {
      text-decoration: none;
      font-size: 18px;
      font-weight: bold;
      color: black;
    }
  }
`;

export const Navbar = () => {
  return (
    <>
      <Nav>
        <div>
          <img
            id="logo"
            src="https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052"
            alt=""
          />
        </div>
        <div>
          <Link className="links" to={"/about"}>
            About Us
          </Link>
          <Link className="links" to={"/contact"}>
            Contact Us
          </Link>
          <Link className="links" to={"/products"}>
            Products
          </Link>
          <Link className="links" to={"login"}>
            Login
          </Link>
          <Link className="links" to={"faq"}>
            FAQs
          </Link>
        </div>
        <div>
          <Link className="links" to={"/login"}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <Link className="links" to={"/cart"}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </Nav>
    </>
  );
};
