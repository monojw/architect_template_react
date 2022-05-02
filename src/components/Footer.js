import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 16px 0;

  p {
    text-align: center;
    height: 52.5px;
    line-height: 52.5px;

    a {
      color: #ccc;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Powered by <NavLink to="/">w3.css</NavLink>
      </p>
    </FooterContainer>
  );
};

export default Footer;
