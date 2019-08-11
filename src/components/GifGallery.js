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
`;

const GifDiv = styled.div`
  width: auto;
  height: 200px;
  margin: 0.2rem;
`;

function GifGallery({ data }) {
  return (
    <GalleryContainer>
      <GalleryTitle>Gif Gallery</GalleryTitle>
      <Gallery>
        {
          data.map(gifData => {
            return (
              <GifDiv key={gifData.gifId}>
                <Gif url={gifData.gifUrl} />
              </GifDiv>
            )
          })
        }
      </Gallery>
    </GalleryContainer>
  )
}

export default GifGallery;