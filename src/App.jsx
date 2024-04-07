import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [items, setItems] = useState(["Book a Cab", "Submit Docs"]);

  const submitForm = (e) => {
    if (e) {
      setItems((curr) => {
        console.log(curr);
        return [...items, e];
      });
    } else {
      alert("enter any task");
    }
  };
  return (
    <>
      <TodoList listItems={items} submitForm={(e) => submitForm(e)}></TodoList>
    </>
  );
}

export default App;
