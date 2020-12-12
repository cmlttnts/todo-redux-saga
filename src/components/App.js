import { Spin } from "antd";
import "antd/dist/antd.css";
import Todo from "components/Todo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { APP_ACTION_CREATORS } from "redux/actions/actionCreators";

const App = () => {
  const { todos, errors, isLoading } = useSelector(state => state);
  console.dir({
    todos,
    errors,
    isLoading
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(APP_ACTION_CREATORS.requestInitLoad());
  }, [dispatch]);

  if (isLoading.init) {
    return (
      <div style={{ display: "grid", placeItems: "center", width: "100vw", height: "100vh" }}>
        <Spin />;
      </div>
    );
  }

  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
export default App;
