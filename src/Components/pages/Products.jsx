import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SubNav = styled.div`
  height: 35px;
  width: 100%;
  background-color: #c69c6e;
  color: #fce9c2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;

  .links {
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    color: white;
  }
`;
export const Products = () => {
  return (
    <>
      <SubNav>
        <Link className="links" to={"belts"}>
          Belts
        </Link>
        <Link className="links" to={"bags"}>
          Bags
        </Link>
        <Link className="links" to={"wallets"}>
          Wallets
        </Link>
        <Link className="links" to={"accessories"}>
          Accessories
        </Link>
      </SubNav>
    </>
  );
};
