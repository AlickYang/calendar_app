import React, { useState } from "react";
/* GraphQL mutations */
import { MUTATION_ADD_TODO } from "./Todo-gql/Mutations";
import { QUERY_GET_TODOS } from "./Todo-gql/Queries";
import { useMutation } from "@apollo/react-hooks";
/* Material UI */
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import AddIcon from "@material-ui/icons/Add";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  marginForInput: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    display: "flex",
    flexWrap: "wrap"
  }
}));

export default function Form() {
  const [valueOfTextField, setValueOfTextField] = useState({
    task: ""
  });
  const [errors, setErrors] = useState({});
  const classes = useStyles();

  const handleOnChange = event => {
    setValueOfTextField({
      ...valueOfTextField,
      [event.target.name]: event.target.value
    });
    console.log(valueOfTextField);
  };

  const [addTodo, { loading }] = useMutation(MUTATION_ADD_TODO, {
    variables: valueOfTextField,
    update(proxy, result) {
      const cacheData = proxy.readQuery({
        query: QUERY_GET_TODOS
      });
      cacheData.getTodos = [result.data.addTodo, ...cacheData.getTodos];
      proxy.writeQuery({ query: QUERY_GET_TODOS, data: cacheData });
      valueOfTextField.task = "";
    },
    onError(err) {
      console.log(err);
      // setErrors(err.graphQLErrors[0].extensions.exception.errors);
      console.log(err.graphQLErrors);
    }
  });

  const onSubmit = event => {
    event.preventDefault();
    addTodo();
    // setValueOfTextField({ [event.target.name]: "" });
  };

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <FormControl fullwidth="true" className={classes.marginForInput}>
        <TextField
          onChange={handleOnChange}
          onSubmit={onSubmit}
          value={valueOfTextField.task}
          name="task"
          id="standard-full-width"
          margin="normal"
          fullWidth
          label="Enter todo"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={onSubmit}>
                <IconButton size="small">
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </FormControl>
    </form>
  );
}
