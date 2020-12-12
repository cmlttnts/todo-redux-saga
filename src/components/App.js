import { useSelector } from "react-redux";

const App = () => {
  const state = useSelector(state => state);
  return (
    <div>
      <div>
        <ul>
          {state.todos.map(todo => (
            <li key={todo.id}>{todo.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;
