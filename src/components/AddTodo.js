import styled from "@emotion/styled";
import { Button, DatePicker, Input } from "antd";
import SortSelect from "components/SortSelect";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { APP_ACTION_CREATORS } from "redux/actions/actionCreators";

const { TextArea } = Input;

const AddTodo = ({ onSortChange }) => {
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");
  const dispatch = useDispatch();

  return (
    <AddTodoStyled>
      <div className="add-todo-inputs">
        <label className="content-label">
          Todo:
          <TextArea
            value={text}
            onChange={e => {
              setText(e.target.value);
            }}
          />
        </label>
        <div>
          <label>
            Deadline:
            <DatePicker
              showTime
              showSecond={false}
              onChange={e => {
                setDeadline(e.valueOf());
              }}
            />
          </label>
        </div>
      </div>
      <div className="add-todo-actions">
        <label>
          Sort: <SortSelect onSortSelect={onSortChange} />
        </label>
        <Button onClick={() => setText("")}>Clear</Button>
        <Button
          type="primary"
          onClick={() => {
            dispatch(
              APP_ACTION_CREATORS.requestAddTodo({
                content: text,
                deadline
              })
            );
            setText("");
          }}
          disabled={!text}>
          Add
        </Button>
      </div>
    </AddTodoStyled>
  );
};

export default AddTodo;

const AddTodoStyled = styled.div`
  display: flex;
  flex-direction: column;
  & > .add-todo-inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    label > * {
      margin-bottom: 12px;
      margin-left: 10px;
    }
    @media (min-width: 768px) {
      flex-direction: row;
      label > .ant-picker {
        margin-left: 0px;
      }
    }
  }
  .content-label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    & > textarea {
      margin-left: 1rem;
      font-size: 1.1rem;
      @media (min-width: 768px) {
        max-width: 70%;
      }
    }
  }

  & > .add-todo-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    & > *:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
