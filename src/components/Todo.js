import styled from "@emotion/styled";
import { Button, Switch } from "antd";

const Todo = ({ todo }) => {
  return (
    <TodoS>
      <div>{todo.content}</div>
      <TodoActionsS>
        <Switch checkedChildren="Done" checked={todo.isComplete} />
        <Button danger type="primary">
          Delete
        </Button>
      </TodoActionsS>
    </TodoS>
  );
};

export default Todo;

const TodoS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px 1rem;
  outline: 2px solid grey;
  padding: 5px 10px;
`;

const TodoActionsS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > button:not(:last-child) {
    margin-bottom: 5px;
  }
  & > button[role="switch"] {
    width: 80%;
  }
`;
