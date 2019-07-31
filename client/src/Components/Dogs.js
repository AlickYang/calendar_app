import gql from "graphql-tag";
import { Query } from "react-apollo";
import React, { Component, Fragment } from "react";

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

export default class Dogs extends Component {
  render() {
    return (
      <Query query={GET_DOGS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          return (
            <Fragment>
              {data.dogs.map(dog => (
                <div>{dog.breed}</div>
              ))}
            </Fragment>
          );
        }}
      </Query>
    );
  }
}
