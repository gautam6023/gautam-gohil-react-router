import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SubNav = styled.div`
  height: 35px;
  width: 100%;
  background-color: #c69c6e;
  color: #fce9c2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;

  p {
    font-size: 16px;
    font-weight: bold;
    color: white;
    word-spacing: 2px;
  }
  .links {
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    color: white;
  }
`;
export const Products = () => {
  return (
    <>
      <p>Products</p>
    </>
  );
};
