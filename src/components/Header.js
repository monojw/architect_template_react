import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 1500px;
  margin: 0 auto;
  position: relative;

  .titleArea {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 16px;

    .mainTitle {
      margin: 10px 0;
    }

    span:first-child {
      background-color: #000;
      color: #fff;
      padding: 8px 16px;
      opacity: 0.75;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      {/* header image */}
      <img src="https://www.w3schools.com/w3images/architect.jpg" alt="main" />

      {/* header title */}
      <div className="titleArea">
        <h1 className="mainTitle">
          <span>
            <b>BR</b>
          </span>
          <span> Architects</span>
        </h1>
      </div>
    </HeaderContainer>
  );
};

export default Header;
