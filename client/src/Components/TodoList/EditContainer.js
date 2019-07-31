import React, { useState } from "react";
import EditForm from "./EditForm";
import EditButton from "./EditButton";
import { EditContext } from "./Utilities/EditProvider";
function EditContainer({ todoId, task }) {
  //<IconButton component={Link} to={`/edit/${todoId}`} onClick={handleModalOpen}>
  return (
    <EditContext.Provider value={{ open }}>
      <EditButton />
      <EditForm />
    </EditContext.Provider>
  );
}
export default EditContainer;
