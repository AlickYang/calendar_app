import React from "react";
//Components
<<<<<<< HEAD
import TodoListContainer from "./Components/TodoListContainer";
//Routes
import { BrowserRouter as Router, Route } from "react-router-dom";
=======
import TodoListContainer from "./Components/TodoList/TodoListContainer";

>>>>>>> f4290b3e2fc8f65cdd113663cca8168ec0fe10ea
//Layouts
import { Header, Background } from "./Components/Layouts";

//Theme
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Style/theme";

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Route exact path="/" component={TodoListContainer} />
      </ThemeProvider>
    </Router>
=======
    <ThemeProvider theme={theme}>
      <Header />
      <TodoListContainer />
    </ThemeProvider>
>>>>>>> f4290b3e2fc8f65cdd113663cca8168ec0fe10ea
  );
}

export default App;
