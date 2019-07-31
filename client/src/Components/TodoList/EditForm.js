import React, { useState, Fragment } from "react";

/* Material UI */
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
/* Material UI */
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
//Icons
import AddIcon from "@material-ui/icons/Add";
import InputAdornment from "@material-ui/core/InputAdornment";

//GQL
import { MUTATION_EDIT_TODO } from "./Todo-gql/Mutations";
import { useMutation } from "@apollo/react-hooks";
import { QUERY_GET_TODOS } from "./Todo-gql/Queries";
const useStyles = makeStyles(theme => ({
  marginForInput: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    display: "flex",
    flexWrap: "wrap"
  }
}));

function EditForm({ todoId, task }) {
  const classes = useStyles();
  const [valueOfTextField, setValueOfTextField] = useState({
    task
  });
  const [editTodo, { loading }] = useMutation(MUTATION_EDIT_TODO, {
    variables: valueOfTextField,
    update(proxy, result) {
      const cacheData = proxy.readQuery({
        query: QUERY_GET_TODOS
      });
      //Edit the current task within the cache
      const editIndex = cacheData.getTodos.find(todo => todo.id === todoId);
      cacheData.getTodos[editIndex] = valueOfTextField.task;
      proxy.writeQuery({ query: QUERY_GET_TODOS, data: cacheData });
      valueOfTextField.task = "";
    },
    onError(err) {
      console.log(err);
      // setErrors(err.graphQLErrors[0].extensions.exception.errors);
      console.log(err.graphQLErrors);
    }
  });
  const onEditSubmit = event => {
    event.preventDefault();
    editTodo();
  };
  const handleOnChange = event => {
    setValueOfTextField({
      ...valueOfTextField,
      [event.target.name]: event.target.value
    });
    console.log(valueOfTextField);
  };
  return (
    <Fragment>
      <DialogTitle id="alert-dialog-title">{"Edit Task"}</DialogTitle>
      <DialogContent>
        <form noValidate autoComplete="off" onSubmit={onEditSubmit}>
          <TextField
            onSubmit={onEditSubmit}
            onChange={handleOnChange}
            autoFocus
            margin="dense"
            value={valueOfTextField.task}
            id="task"
            name="task"
            label="Task"
            fullWidth
          />
        </form>
      </DialogContent>
    </Fragment>
  );
}
export default EditForm;
