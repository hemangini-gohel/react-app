import "./App.css";
import TodoList from "./TodoList";

function App() {
  let items = ["Book a Cab", "Submit Docs"];
  return (
    <>
      <TodoList listItems={items}></TodoList>
    </>
  );
}

export default App;
