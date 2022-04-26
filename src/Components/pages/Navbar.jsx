import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.div`
  height: 60px;
  width: 100%;
  background-color: black;
  display: flex;
  color: white;

  div {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;

    .links {
      text-decoration: none;
      font-size: 22px;
      font-weight: 500;
      color: white;
    }
  }
`;

export const Navbar = () => {
  return (
    <Nav>
      <div>
        <h1>Logo</h1>
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
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </Nav>
  );
};
