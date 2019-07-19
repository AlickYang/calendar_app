import React from "react";
/* GraphQL mutations */

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
  const classes = useStyles();
  return (
    <FormControl fullwidth className={classes.marginForInput}>
      <TextField
        id="standard-full-width"
        margin="normal"
        fullWidth
        label="Enter todo"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton size="small">
                <AddIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </FormControl>
  );
}
