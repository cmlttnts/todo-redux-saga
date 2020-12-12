import styled from "@emotion/styled";
import { Button, Modal, Switch } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { APP_ACTION_CREATORS } from "redux/actions/actionCreators";

const Todo = ({ todo, isLoading }) => {
  const dispatch = useDispatch();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  return (
    <TodoS>
      <div>{todo.content}</div>
      <TodoActionsS>
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
      </TodoActionsS>
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
    </TodoS>
  );

  function handleDeleteOk() {
    dispatch(APP_ACTION_CREATORS.requestRemoveTodo(todo.id));
  }
  function handleDeleteCancel() {
    setDeleteModalVisible(false);
  }
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
