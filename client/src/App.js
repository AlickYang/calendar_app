import React, { Component } from "react";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

//Components
import Todos from "./Components/TodoList/Todos";

//Layouts
import { Header, Footer, Background } from "./Components/Layouts";

//Run apollo client
const client = new ApolloClient({
  uri: "http://localhost:4001/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <Header />
          <Background />
          <Footer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
