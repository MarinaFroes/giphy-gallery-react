import React from 'react';
import Gif from './Gif';
import styled from 'styled-components';

const GalleryTitle = styled.h2`
   font-size: 1.5rem;
`;

const Gallery = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid blue;
`;

const GifDiv = styled.div`
  width: 200px;
  height: 200px;
  border: 3px solid red;
  margin: 0.2rem;
`;

const gifsArray = [1, 2, 3, 4, 5, 6, 8, 9, 10];

export default function GifGallery() {
  return (
    <GalleryContainer>
      <GalleryTitle>Trending Gifs</GalleryTitle>
      <Gallery>
        {
          gifsArray.map(gif => {
            return (
              <GifDiv>
              <Gif url={gif} alt={gif} key={gif} />
              </GifDiv>
            )
          })
        }
        <Gif data={"test"}/>
      </Gallery>
    </GalleryContainer>
  )
}
