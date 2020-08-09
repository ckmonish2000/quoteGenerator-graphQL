import React, { Component } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

export default class App extends Component {
  client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
  });

  state = {
    dta: "hello",
  };

  call = () => {
    this.client
      .query({
        query: gql`
          query upcoming {
            launchesUpcoming {
              id
              rocket {
                rocket_name
                rocket_type
              }
            }
          }
        `,
      })
      .then((result) => {
        console.log(result);
        this.setState({ dta: "working" });
      });
  };
  render() {
    console.log("bro");
    return (
      <div>
        <h1>{this.state.dta}</h1>
        <button onClick={this.call}>click</button>
      </div>
    );
  }
}
