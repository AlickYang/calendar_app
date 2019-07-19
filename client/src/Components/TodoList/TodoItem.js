import React, { useState } from "react";
/* Material UI */
import { makeStyles } from "@material-ui/core/styles";
import TodoItemTheme from "./TodoTheme";
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

export default function TodoItem({ id, todo, subTodos, isComplete }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  const classes = useStyles();
  return (
    <List style={style}>
      <ListItem key={id} button onClick={handleClick}>
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary={todo} />
        <ListItemSecondaryAction>
          <IconButton>
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
