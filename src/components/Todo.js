import styled from "@emotion/styled";
import { Button, Modal, Switch } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { APP_ACTION_CREATORS } from "redux/actions/actionCreators";
import { getTimeUntilDeadline } from "utils";

const Todo = ({ todo, isLoading }) => {
  const dispatch = useDispatch();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [timeUntilDeadline, isPassed] = todo.deadline
    ? getTimeUntilDeadline(todo.deadline)
    : [null, null];
  return (
    <TodoStyled isComplete={todo.isComplete}>
      <TodoInnerStyled>
        <div>{todo.content}</div>
        <TodoActionsStyled>
          <Switch
            checkedChildren="Done"
            unCheckedChildren="Doing"
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
          onCancel={handleDeleteCancel}
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
      {!todo.isComplete && timeUntilDeadline && (
        <div className="deadline">
          {isPassed && <span className="warn-deadline">!</span>}
          Until deadline: {timeUntilDeadline}
        </div>
      )}
      <div className="created-at">Created at: {new Date(todo.createdAt).toLocaleString()}</div>
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
  border: 2px solid grey;
  border-radius: 4px;
  padding: 5px 10px;
  margin: 10px 0;
  background-color: ${props => (props.isComplete ? "rgba(186, 252, 3, 0.6)" : "lavender")};
  & > .deadline {
    border-top: 2px solid grey;
    padding-left: 5px;
  }
  & > .created-at {
    border-top: 2px solid grey;
    padding-left: 5px;
  }

  & .warn-deadline {
    padding: 0 4px;
    margin-right: 4px;
    font-size: 1.1rem;
    color: red;
    border: 2px dashed red;
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
    width: 90%;
  }
`;
