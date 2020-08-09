import { ApolloClient } from "@apollo/client";
import { gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

client
  .query({
    query: gql`
      {
        quote
      }
    `,
  })
  .then((result) => {
    console.log(r);
  });
