import React, { Component } from "react";
import { InMemoryCache, ApolloClient, gql } from "@apollo/client";
export default class Quote extends Component {
  state = {
    quote: "load quotes",
  };

  client = new ApolloClient({
    uri: "https://mkgraphql1.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  call = () => {
    this.client
      .query({
        query: gql`
          query newquote {
            quote
          }
        `,
      })
      .then((result) => {
        console.log(result.data.quote);
        this.setState({ quote: result.data.quote });
      });
  };

  render() {
    return (
      <div>
        <h1>{this.state.quote}</h1>
        <button onClick={this.call}>get quote</button>
        <button
          onClick={() => {
            this.setState({ quote: "load quotes" });
          }}
        >
          reset
        </button>
      </div>
    );
  }
}
