import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  border: 3px solid yellow;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 6rem;
  border: 3px solid green;
`;

export default function Header(){
  return (
    <HeaderContainer>
      <Title>Awesome Gifs</Title>
    </HeaderContainer>
  )
}
