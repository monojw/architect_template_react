import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  .subTitle {
    margin: 15px 0;
  }
`;

const AboutContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 8px;
  row-gap: 16px;
  margin-bottom: 31px;
  filter: grayscale(75%);

  .aboutCard {
    position: relative;
    width: 25%;
    padding: 0 8px;

    .title {
      margin: 10px 0;
    }

    .subTitle,
    .desc {
      margin: 15px 0;
    }

    .btn {
      width: 100%;

      &:hover {
        background-color: #ccc;
      }
    }
  }
`;

const AboutContent = ({ img, name, position, desc }) => {
  return (
    <div className="aboutCard">
      <img src={img} alt={name} />
      <h3 className="title">{name}</h3>
      <p className="subTitle">{position}</p>
      <p className="desc">{desc}</p>
      <button className="btn">Contact</button>
    </div>
  );
};

const About = ({ about }) => {
  const { content, member } = about;

  return (
    <AboutContainer id="about">
      <div className="titleArea">
        <h2 className="title">About</h2>
        <p className="subTitle">{content}</p>
      </div>

      {/* 데이터를 받아와서 컴포넌트 생성 */}
      <AboutContentContainer>
        {member.map((v, i) => {
          return (
            <AboutContent
              key={i}
              img={`process.env.PUBLIC_URL/${v.img}`}
              name={v.name}
              position={v.position}
              desc={v.desc}
            />
          );
        })}
      </AboutContentContainer>
    </AboutContainer>
  );
};

export default About;
