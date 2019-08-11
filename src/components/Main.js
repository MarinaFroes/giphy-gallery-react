import React, { Component } from 'react';
import SearchBar from './SearchBar';
import GifGallery from './GifGallery';
import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  padding: 10px;
  color: red;
  font-weight: bold;
`;


const API_KEY = "catBjjoSXxZlwG8tEqcHcRnoSEpoDphA";

export default class Main extends Component {

  state = {
    gifDatas: [],
    error: "",
    loading: true
  }

  getTrendingGifs = async () => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10&rating=G`);

      if (response.status === 200) {
        const jsonResponse = await response.json();
        const gifDataArray = [];

        for (let i = 0; i < jsonResponse.data.length; i++) {
          gifDataArray.push({
            gifId: jsonResponse.data[i]["id"],
            gifUrl: jsonResponse.data[i].images.fixed_height.url
          })
        }

        await this.setState({
          gifDatas: gifDataArray,
          loading: false,
          error: null
        });

        return;
      }
      throw new Error("Failed");
    }
    catch (error) {
      this.setState({
        error: `Oops! There was an error: ${error}`
      });
      console.log(error);
    }
  }
  
  getUserInput = async (userInput) => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${userInput}&limit=10&offset=0&rating=G&lang=en`);

      if (response.status === 200) {
        const jsonResponse = await response.json();
        const gifDataArray = [];

        for (let i = 0; i < jsonResponse.data.length; i++) {
          gifDataArray.push({
            gifId: jsonResponse.data[i].id,
            gifUrl: jsonResponse.data[i].images.fixed_height.url
          })
        }

        await this.setState({
          gifDatas: gifDataArray,
          loading: false,
          error: null
        });

      }
    }
    catch (error) {
      this.setState({
        error: `Oops! There was an error: ${error}`
      });
      console.log(error);
    }
  }

  async componentDidMount() {
    await this.getTrendingGifs();
  }
  
  async handleSubmit(event) {
    event.preventDefault();
    const userInput = event.target.search.value;
    console.log(userInput);
    await this.getUserInput(userInput);
  }

  render() {
    return (
      <MainContainer>
        <SearchBar onSubmit={this.handleSubmit}/>
        <GifGallery gifDatas={this.state.gifDatas} />
        <ErrorMessage>{this.state.error}</ErrorMessage>
      </MainContainer>
    )
  }
}
