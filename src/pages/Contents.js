import React from 'react';
import styled from 'styled-components';

import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Project';

import data from '../data/data';

const ContentsContainer = styled.div`
  max-width: 1564px;
  padding: 8px 16px;

  .titleArea {
    padding: 32px 16px;

    .title {
      padding: 16px 0;
      margin: 10px 0;
      border-bottom: 1px solid #f1f1f1;
    }
  }
`;

const Contents = () => {
  const { project, about } = data; // 데이터를 받아와서 props로 보낸다.

  return (
    <ContentsContainer>
      {/* PROJECTS */}
      <Projects project={project} />

      {/* ABOUT */}
      <About about={about} />

      {/* CONTACT */}
      <Contact />
    </ContentsContainer>
  );
};

export default Contents;
