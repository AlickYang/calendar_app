import React, { useState } from "react";
import moment from "moment";
/* Material UI */
import { makeStyles } from "@material-ui/core/styles";
import TodoItemTheme from "./TodoTheme";
import { MUTATION_REMOVE_TODO } from "./Todo-gql/Mutations";
import { QUERY_GET_TODOS } from "./Todo-gql/Queries";
import { useMutation } from "@apollo/react-hooks";
//List related
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
//Icons
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteRounded from "@material-ui/icons/DeleteRounded";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const style = {
  padding: "5px 5px"
};

export default function TodoItem({
  id,
  todo,
  subTodos,
  isComplete,
  createdAt
}) {
  const [open, setOpen] = useState(false);
  const todoId = id;

  function handleClick() {
    setOpen(!open);
  }

  const [removeTodo, { loading }] = useMutation(MUTATION_REMOVE_TODO, {
    update(proxy, result) {
      const cacheData = proxy.readQuery({
        query: QUERY_GET_TODOS
      });
      cacheData.getTodos = cacheData.getTodos.filter(
        todo => todo.id !== todoId
      );
      proxy.writeQuery({ query: QUERY_GET_TODOS, data: cacheData });
    },
    onError(err) {
      console.log(err);
      console.log(err.graphQLErrors);
    },
    variables: { id: todoId }
  });

  const onDeleteClick = event => {
    event.preventDefault();
    removeTodo();
  };

  const classes = useStyles();
  const time = moment(createdAt).format("l");

  return (
    <List style={style}>
      <ListItem key={id} button onClick={handleClick}>
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary={todo} secondary={time} />
        <ListItemSecondaryAction>
          <IconButton onClick={onDeleteClick}>
            <DeleteRounded />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {subTodos.map(subTodo => (
          <List key={subTodo.id} component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Checkbox />
              </ListItemIcon>
              <ListItemText primary={subTodo.task} />
            </ListItem>
          </List>
        ))}
      </Collapse>
    </List>
  );
}
