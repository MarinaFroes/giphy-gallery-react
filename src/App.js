import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import GifGallery from './components/GifGallery';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <SearchBar />
        <GifGallery />
      </Main>
      <Footer />
    </div>
  );
}
