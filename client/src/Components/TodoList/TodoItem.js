import React, { useState } from "react";
import moment from "moment";
<<<<<<< HEAD
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
/* Material UI */
import { makeStyles } from "@material-ui/core/styles";

=======
/* Material UI */
import { makeStyles } from "@material-ui/core/styles";
import TodoItemTheme from "./TodoTheme";
import { MUTATION_REMOVE_TODO } from "./Todo-gql/Mutations";
import { QUERY_GET_TODOS } from "./Todo-gql/Queries";
import { useMutation } from "@apollo/react-hooks";
>>>>>>> f4290b3e2fc8f65cdd113663cca8168ec0fe10ea
//List related
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
<<<<<<< HEAD
//Icons
import CheckBox from "@material-ui/core/CheckBox";
import Divider from "@material-ui/core/Divider";
=======
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
//Icons
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteRounded from "@material-ui/icons/DeleteRounded";
>>>>>>> f4290b3e2fc8f65cdd113663cca8168ec0fe10ea

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
<<<<<<< HEAD
  },
  iconContainer: {
    display: "flex"
=======
>>>>>>> f4290b3e2fc8f65cdd113663cca8168ec0fe10ea
  }
}));

const style = {
  padding: "5px 5px"
};

export default function TodoItem({
  id,
  task,
  subTodos,
  isComplete,
  createdAt
}) {
  //State for whether item is nested
  const [open, setOpen] = useState(false);
  const todoId = id;

  function handleClick() {
    setOpen(!open);
  }

  const onEditClick = event => {
    event.preventDefault();
    //Create textfield
  };

  const classes = useStyles();
  const time = moment(createdAt).format("l");

  return (
    <List style={style}>
      <ListItem key={id} button onClick={handleClick}>
        <ListItemIcon>
          <CheckBox />
        </ListItemIcon>
        <ListItemText primary={task} secondary={time} />
        <ListItemSecondaryAction className={classes.iconContainer}>
          <EditButton todoId={id} task={task} />
          <Divider className={classes.divider} />
          <DeleteButton todoId={id} />
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {subTodos.map(subTodo => (
          <List key={subTodo.id} component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <CheckBox />
              </ListItemIcon>
              <ListItemText primary={subTodo.task} />
            </ListItem>
          </List>
        ))}
      </Collapse>
    </List>
  );
}
