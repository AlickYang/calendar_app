import React, { useState } from "react";
import moment from "moment";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
/* Material UI */
import { makeStyles } from "@material-ui/core/styles";
//List related
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
//Icons
import CheckBox from "@material-ui/core/CheckBox";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  },
  iconContainer: {
    display: "flex"
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
  // const todoId = id;

  function handleClick() {
    setOpen(!open);
  }

  // const onEditClick = event => {
  //   event.preventDefault();
  //   //Create textfield
  // };

  const classes = useStyles();
  const time = moment(createdAt).format("l");
  console.log(task);
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
