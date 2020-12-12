import styled from "@emotion/styled";
import { Button, Modal, Switch } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { APP_ACTION_CREATORS } from "redux/actions/actionCreators";
import { getTimeUntilDeadline } from "utils";

const Todo = ({ todo, isLoading }) => {
  const dispatch = useDispatch();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  return (
    <TodoStyled isComplete={todo.isComplete}>
      <TodoInnerStyled>
        <div>{todo.content}</div>
        <TodoActionsStyled>
          <Switch
            checkedChildren="Done"
            checked={todo.isComplete}
            onChange={() => {
              dispatch(
                APP_ACTION_CREATORS.requestToggleTodo({ id: todo.id, isComplete: !todo.isComplete })
              );
            }}
          />
          <Button danger type="primary" onClick={() => setDeleteModalVisible(true)}>
            Delete
          </Button>
        </TodoActionsStyled>
        <Modal
          visible={deleteModalVisible}
          footer={[
            <Button key="back" onClick={handleDeleteCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" loading={isLoading} onClick={handleDeleteOk}>
              Yes
            </Button>
          ]}>
          Are you sure you want to delete this todo?
        </Modal>
      </TodoInnerStyled>
      <div>Until deadline: {getTimeUntilDeadline(todo.deadline)}</div>
    </TodoStyled>
  );

  function handleDeleteOk() {
    dispatch(APP_ACTION_CREATORS.requestRemoveTodo(todo.id));
  }
  function handleDeleteCancel() {
    setDeleteModalVisible(false);
  }
};

export default Todo;

const TodoStyled = styled.div`
  display: flex;
  flex-direction: column;
  outline: 2px solid grey;
  padding: 5px 10px;
  margin: 10px 1rem;
  background-color: ${props => (props.isComplete ? "rgba(186, 252, 3, 0.6)" : "lavender")};
  & > div:last-child {
    border-top: 2px solid grey;
  }
`;

const TodoInnerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TodoActionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > button {
    margin-bottom: 5px;
  }
  & > button[role="switch"] {
    width: 80%;
  }
`;
