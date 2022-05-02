/**
 * @filename: index.js
 * @description: 프로그램 시작점
 * @author: JEON WOO YEOL
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// SEO
import Meta from './Meta';

// 글로벌 스타일
import GlobalStyles from './GlobalStyles';

// 라우팅
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      {/* SEO 태그 */}
      <Meta />

      {/* 글로벌 스타일 */}
      <GlobalStyles />

      {/* 라우팅 */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </>
  </React.StrictMode>,
);
