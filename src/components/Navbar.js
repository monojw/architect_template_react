import React from 'react';
import { NavLink } from 'react-router-dom';
import Link from 'react-scroll/modules/components/Link';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 8px 16px;
  background: #fff;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  letter-spacing: 4px;
  z-index: 99999;

  .headerLogo {
    padding: 8px 16px;
  }

  .headerNav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;

    a {
      padding: 8px 16px;
      &:hover {
        background: #ccc;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    .headerNav {
      display: none;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      {/* logo */}
      <div className="headerLogo">
        <Link to="header">
          <b>BR</b> Architects
        </Link>
      </div>

      {/* nav */}
      <div className="headerNav">
        <li>
          <Link to="projects">Projects</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
