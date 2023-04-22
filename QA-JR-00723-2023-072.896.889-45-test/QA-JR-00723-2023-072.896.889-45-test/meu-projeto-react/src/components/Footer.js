import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = styled.footer`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  a {
    color: white;
    margin-right: 20px;
    font-size: 24px;

    &:hover {
      color: #0077b5; /* cor do linkedin */
    }
  }
`;

const FooterLinks = () => {
  return (
    <Footer>
      <IconContainer>
        <a href="https://www.linkedin.com/giulia-verruck-tortola" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/giuliaverruck" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </IconContainer>
    </Footer>
  );
};

export default FooterLinks;