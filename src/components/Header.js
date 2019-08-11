import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 2rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 6rem;
`;

export default function Header(){
  return (
    <HeaderContainer>
      <Title>Awesome Gifs</Title>
    </HeaderContainer>
  )
}
