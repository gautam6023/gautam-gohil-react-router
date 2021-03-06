import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const FooterCon = styled.footer`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  color: #222222;
  gap: 50px;

  .lists {
    display: flex;
    justify-content: center;
    gap: 100px;

    ul {
      list-style: none;
      text-align: left;
      line-height: 35px;
    }
  }

  .icons {
    display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 30px;
  }
`;

export const Footer = () => {
  return (
    <FooterCon>
      <div className="lists">
        <ul>
          <p>FEATURED BRANDS</p>
          <li>Heimat</li>
          <li>it Vanishes.</li>
          <li>Kestin</li>
          <li>Nanamica</li>
          <li>corSlow</li>
          <li>RoToTo</li>
          <li>Universal Works</li>
        </ul>
        <ul>
          <p>BRAND INFO</p>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link className="links" to={"/contact"}>
              Contact Us
            </Link>
          </li>
          <li>Journal</li>
          <li>Repairs | Warranty Info</li>
          <li>Returns | Exchanges | Refunds</li>
          <li>
            <Link className="links" to={"/faq"}>
              FAQs
            </Link>
          </li>
        </ul>
        <ul>
          <p>SHOP</p>
          <li>New Arrivals</li>
          <li>Best Sellers</li>
          <li>Home & Lifestyle</li>
          <li>
            <Link className="links" to={"/prodcuts/belts"}>
              Belts
            </Link>
          </li>
          <li>
            <Link className="links" to={"/prodcuts/wallets"}>
              Wallets
            </Link>
          </li>
          <li>
            {" "}
            <Link className="links" to={"/prodcuts/bags"}>
              Bags
            </Link>
          </li>
          <li>Tops</li>
          <li>Bottoms</li>
          <li>Final Sale</li>
        </ul>
      </div>
      <div className="footer_second">
        <h3>Follow us on</h3>
        <div className="icons">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
    </FooterCon>
  );
};
