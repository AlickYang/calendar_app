import React from "react";

//Related Components
import Todos from "./Todos";
import Form from "./Form";

//Grid layout
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//Material Style
// import useStyles from "./TodoTheme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(1),
    flexGrow: 1,
    textAlign: "left",
    padding: 0
  }
}));

export default function TodoListContainer() {
  const classes = useStyles();
  return (
    <Grid container spacing={0}>
      <Grid item sm={3} />
      <Grid item sm={6}>
        <Paper className={classes.paper}>
          <Form />
          <Todos />
        </Paper>
      </Grid>
    </Grid>
  );
}
