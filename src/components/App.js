import styled from "@emotion/styled";
import { Spin } from "antd";
import "antd/dist/antd.css";
import "components/App.css";
import Todos from "components/Todos";
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

  if (errors.init) {
    return <p>Cannot reach the server, please try again after some time</p>;
  }

  if (isLoading.init) {
    return (
      <LoadingContainerStyled>
        <Spin />;
      </LoadingContainerStyled>
    );
  }

  return (
    <div className="App">
      <Todos />
    </div>
  );
};
export default App;

const LoadingContainerStyled = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`;
