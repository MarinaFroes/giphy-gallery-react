import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: left;
  border: 3px solid purple;
  width: 100%;
`;

const InputText = styled.input`
  width: 200px;
  border-radius: 5px;
  font-size: 1rem;
  margin: 1rem;
  margin-left: 3rem;
`;

const InputSubmit = styled.input`
  font-size: 1rem;
  margin: 1rem;
  background-color: #fff;
  border-radius: 5px;
  border: 2px solid #4CAF50; 
  padding: 0.5rem;

  &:hover {
    background-color: #4CAF50;
    color: #fff;
    cursor: pointer;
  }
`;

export default function SearchBar(): JSX.Element {
  return (
    <SearchBarContainer>
      <InputText type="text" name="search" id="search" />
      <InputSubmit type="submit" value="Search" />
    </SearchBarContainer>
  )
}
