import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const ContactInfo = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  background-color: #fff;
  color: #000;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.a`
  color: silver;
  font-size: 2rem;
  margin: 0 1rem;
`;

export default function Footer() {
  return (
    <ContactInfo>
      <p>Page written by Marina Froes A. Costa</p>
      <IconContainer>
        <Icon href="https://github.com/MarinaFroes" target="_blank">
          {<FaGithub />}
        </Icon>
        <Icon
          href="https://www.linkedin.com/in/marina-froes-a-costa/"
          target="_blank"
        >
          {<FaLinkedin />}
        </Icon>
      </IconContainer>
    </ContactInfo>
  )
};

