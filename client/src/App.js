import React from "react";
//Components
import TodoListContainer from "./Components/TodoListContainer";
//Routes
import { BrowserRouter as Router, Route } from "react-router-dom";
//Layouts
import { Header, Background } from "./Components/Layouts";

//Theme
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Style/theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Route exact path="/" component={TodoListContainer} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
