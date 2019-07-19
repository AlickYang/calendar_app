import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

//Components
import TodoListContainer from "./Components/TodoList/TodoListContainer";

//Layouts
import { Header, Background } from "./Components/Layouts";

//Theme
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Style/theme";

//Run apollo client
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Header />
          <TodoListContainer />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
