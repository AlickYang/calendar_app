import React from "react";
/* Material UI */
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteRounded from "@material-ui/icons/DeleteRounded";

/* GraphQL */
import { MUTATION_REMOVE_TODO } from "./Todo-gql/Mutations";
import { QUERY_GET_TODOS } from "./Todo-gql/Queries";
import { useMutation } from "@apollo/react-hooks";

function DeleteButton({ todoId }) {
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

  return (
    <Tooltip title="Delete">
      <IconButton onClick={onDeleteClick}>
        <DeleteRounded />
      </IconButton>
    </Tooltip>
  );
}

export default DeleteButton;
