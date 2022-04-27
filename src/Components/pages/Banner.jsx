import React from "react";
import styled from "styled-components";

const BannerCon = styled.div`
  height: 600px;
  width: 100%;
  background-image: url("https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Hero-Mothers-Day-02_1944x.jpg?v=1650928039");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  div {
    width: 50%;
  }

  .texts {
    display: flex;
    flex-direction: column;
    padding-top: 7%;
    text-align: left;
    align-items: left;
    padding-left: 12%;
    color: white;
    p {
      margin: 10px;
    }
    h1 {
      font-size: 70px;
      margin: 0;
    }
  }
`;

export const Banner = () => {
  return (
    <BannerCon>
      <div className="texts">
        <p>GIFTS WITH GRATITUDE</p>
        <h1>Mother's Day</h1>
        <h1>Collecton</h1>
      </div>
      <div></div>
    </BannerCon>
  );
};
