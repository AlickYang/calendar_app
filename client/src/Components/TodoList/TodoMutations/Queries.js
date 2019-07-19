import gql from "graphql-tag";

const TodosQuery = gql`
  {
    todos {
      id
      task
      isComplete
    }
  }
`;


const SubTodosQuery = gql`
{
	{
		subTodos {
			id 
			task 
			isComplete
		}
	}
}
`