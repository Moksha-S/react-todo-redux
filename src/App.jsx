import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoS from "./components/TodoS";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Redux Learning...</h1>
      <AddTodo />
      <TodoS />
    </>
  );
}

export default App;
