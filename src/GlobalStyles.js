/**
 * @filename: GlobalStyles.js
 * @description: 전역 스타일 시트
 * @author: JEON WOO YEOL
 */

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Verdana, sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 22.5px;
  }

  .mainTitle {
    font-family: 'Segoe UI', Arial, sans-serif;
    font-weight: 400;
    font-size: 36px;
    line-height: 54px;
    letter-spacing: 4px;
    color: #f1f1f1;
  }

  .title {
    font-family: 'Segoe UI', Arial, sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
  }

  .subTitle {
    font-family: 'Segoe UI', Arial, sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
  }

  a {
    color: #000;
    text-decoration: none;
    outline: none;

    &:hover,
    &:active {
      text-decoration: none;
      color: #000;
    }
  }

  ol,
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    width: 100%;
  }

  button {
    display: block;
    font-family: Verdana, sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    line-height: 23px;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
  }
`;

export default GlobalStyles;
