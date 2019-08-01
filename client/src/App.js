import React from "react";
//Components
import TodoListContainer from "./Components/TodoList/TodoListContainer";

//Layouts
import { Header, Background } from "./Components/Layouts";

//Theme
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <TodoListContainer />
    </ThemeProvider>
  );
}

export default App;
