import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  .titleArea {
    .subTitle {
      margin: 15px 0;
    }
  }

  .formArea {
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      margin-bottom: 16px;
      font-size: 15px;
    }

    .btn {
      color: #fff;
      background-color: #000;
      margin: 16px 0;

      &:hover {
        background-color: #ccc;
        color: #000;
      }
    }
  }

  .imgArea {
    padding: 0 10px;
  }
`;

const ContactForm = () => {
  return (
    <form className="formArea">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Subject" />
      <input type="text" placeholder="Comment" />
      <button className="btn">SEND MESSAGE</button>
    </form>
  );
};

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <div className="titleArea">
        <h2 className="title">Contact</h2>
        <p className="subTitle">
          Lets get in touch and talk about your next project.
        </p>

        {/* Contact Form */}
        <ContactForm />
      </div>

      <div className="imgArea">
        <img src="https://www.w3schools.com/w3images/map.jpg" alt="map" />
      </div>
    </ContactContainer>
  );
};

export default Contact;
