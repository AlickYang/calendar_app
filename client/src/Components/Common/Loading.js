import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  button: {
    margin: theme.spacing(2)
  },
  placeholder: {
    height: 40
  }
}));

export default function Loading() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("idle");
  const timerRef = useRef();

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    []
  );

  function handleClickLoading() {
    setLoading(prevLoading => !prevLoading);
  }

  function handleClickQuery() {
    clearTimeout(timerRef.current);
    if (query !== "idle") {
      setQuery("idle");
      return;
    }

    setQuery("progress");
    timerRef.current = setTimeout(() => {
      setQuery("success");
    }, 2000);
  }

  return (
    <div className={classes.root}>
      <div className={classes.placeholder}>
        <CircularProgress />
      </div>
    </div>
  );
}
