import React from 'react';

export default function Gif({ url, altText }) {
  return (
    <img src={url} alt={altText}/>
  )
}
