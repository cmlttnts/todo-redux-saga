import styled from "@emotion/styled";
import { Modal } from "antd";
import AddTodo from "components/AddTodo";
import Todo from "components/Todo";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { APP_ACTION_CREATORS } from "redux/actions/actionCreators";
import { DEFAULT_SORT, SORT_FUNCS } from "utils";

const Todos = () => {
  const { todos, errors, isLoading } = useSelector(state => state);
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState(DEFAULT_SORT);

  const sortedTodos = [...todos].sort(SORT_FUNCS[sortBy]);

  useEffect(() => {
    if (errors.update) {
      Modal.error({
        title: "Connection Error",
        content: "Your changes were not successful. Please try again",
        onOk: () => {
          dispatch(APP_ACTION_CREATORS.ackFailure());
        }
      });
    }
  });

  return (
    <TodosStyled>
      <AddTodo onSortChange={setSortBy} />
      {sortedTodos.map(todo => (
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
