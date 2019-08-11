import React, { Component } from "react";
import SearchBar from "./SearchBar";
import GifGallery from "./GifGallery";
import styled from "styled-components";

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

export default class Main extends Component {
  state = {
    gifDatas: [],
    errorMessage: "",
    loading: true
  };

  fetchData = async (type, userInput) => {
    const endpoint = `https://api.giphy.com/v1/gifs/${type}?api_key=catBjjoSXxZlwG8tEqcHcRnoSEpoDphA&q=${userInput}&limit=10&offset=0&rating=G&lang=en`;

    try {
      const response = await fetch(endpoint);

      if (response.status === 200) {
        const jsonResponse = await response.json();
        const gifDataArray = [];

        for (let i = 0; i < jsonResponse.data.length; i++) {
          gifDataArray.push({
            gifId: jsonResponse.data[i].id,
            gifUrl: jsonResponse.data[i].images.fixed_height.url
          });
        }
        console.log(jsonResponse.pagination.total_count);

        if (jsonResponse.pagination.total_count === 0) {
          this.setState({
            errorMessage: "No gif found. Try again"
          });
        } else {
          this.setState({
            errorMessage: ""
          });
        }

        this.setState({
          gifDatas: gifDataArray,
          loading: false,
          errorMessage: null
        });
      }
    } catch (error) {
      this.setState({
        errorMessage: `Oops! There was an error: ${error}`
      });
      console.log(error);
    }
  };

  componentDidMount = async () => {
    await this.fetchData("trending", "");
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const userInput = event.target.search.value;
    await this.fetchData("search", userInput);
  }

  render() {
    return (
      <MainContainer>
        <SearchBar onSubmit={this.handleSubmit}/>
        <GifGallery gifDatas={this.state.gifDatas} />
        <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
      </MainContainer>
    );
  }
}
