/**
 * @filename: App.js
 * @description: 컴포넌트 정의
 * @author: JEON WOO YEOL
 */

import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Header from './components/Header';

import Contents from './pages/Contents';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <AppContainer>
      {/* NAVBAR */}
      <Navbar />

      {/* HEADER */}
      <Header />

      <Routes>
        {/* CONTENTS */}
        <Route path="/" export={true} element={<Contents />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </AppContainer>
  );
};

export default App;
