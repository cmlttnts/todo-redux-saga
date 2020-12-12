import styled from "@emotion/styled";
import Todo from "components/Todo";
import { useSelector } from "react-redux";

const Todos = () => {
  const { todos, errors, isLoading } = useSelector(state => state);
  console.dir({
    todos,
    errors,
    isLoading
  });

  return (
    <TodosStyled>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} isLoading={isLoading.update} />
      ))}
    </TodosStyled>
  );
};
export default Todos;

const TodosStyled = styled.div`
  width: 90%;
  max-width: 800px;
`;
