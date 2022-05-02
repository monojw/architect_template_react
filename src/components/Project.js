import React from 'react';
import styled from 'styled-components';

const ProjectContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 8px;
  row-gap: 16px;

  .projectCard {
    position: relative;
    width: 25%;
    padding: 0 8px;

    .cardTitle {
      position: absolute;
      top: 0;
      padding: 8px 16px;
      background: #000;
      color: #fff;
    }
  }
`;

const ProjectContent = ({ img, subject }) => {
  return (
    <div className="projectCard">
      <img src={process.env.PUBLIC_URL + img} alt={subject} />
      <div className="cardTitle">{subject}</div>
    </div>
  );
};

const Project = ({ project }) => {
  return (
    <div id="projects">
      <div className="titleArea">
        <h2 className="title">Projects</h2>
      </div>

      {/* 데이터를 받아와서 컴포넌트 생성 */}
      <ProjectContentContainer>
        {project.map((v, i) => {
          return <ProjectContent key={i} img={v.img} subject={v.subject} />;
        })}
      </ProjectContentContainer>
    </div>
  );
};

export default Project;
