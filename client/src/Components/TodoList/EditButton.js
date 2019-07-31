import React, { useState } from "react";
import EditForm from "./EditForm";
/* Material UI */
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
//Dialog
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//Links
import { Link } from "react-router-dom";
import { EditContext } from "./Utilities/EditProvider";

function EditButton({ todoId, task }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onEditClick = () => {
    //Redirect to the task editor route "/edit/todo_id"
  };

  //<IconButton component={Link} to={`/edit/${todoId}`} onClick={handleModalOpen}>
  return (
    <EditContext.Provider value={{open }}>
      <Tooltip title="Edit">
        <IconButton>
          <Edit onClick={handleOpen} />
          <Dialog
            fullWidth
            maxWidth="sm"
            open={open}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
          >
            <EditForm todoId={todoId} task={task} />
            <DialogActions>
              <Button onClick={handleClose} color="primary" autoFocus>
                Update
              </Button>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </IconButton>
      </Tooltip>
    </EditContext.Provider>
  );
}
export default EditButton;
