/* eslint-disable react/prop-types */
import AddItem from "./AddItem";
import NoItem from "./NoItem";
import styles from "./TodoList.module.css";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const TodoList = ({ listItems, submitForm }) => {
  const markDone = (item) => {
    const newActiveItem = [...activeItem, item];
    setActiveItem(newActiveItem);
    setColour("#555");
  };
  const [color, setColour] = useState("#111");
  const [activeItem, setActiveItem] = useState([]);
  return (
    <>
      <div className={`container w-50 ${styles.todoContainer}`}>
        <center className="heading">Todo List</center>
        <NoItem items={listItems}></NoItem>
        <AddItem submitForm={(e) => submitForm(e)}></AddItem>
        {/* eslint-disable-next-line react/prop-types */}
        {listItems.map((item) => (
          <div key={item}>
            <div
              className="row my-2"
              style={{
                backgroundColor: activeItem.includes(item) ? color : "#000",
              }}
              onClick={() => {
                markDone(item);
              }}
            >
              <div className="col-8">
                <span className={styles.itemName}>{item}</span>
              </div>
              <div className="col-4">
                <button
                  className={`btn btn-light fw-bold ${styles.markDoneBtn}`}
                  onClick={() => markDone(item)}
                >
                  <FaCheck />
                </button>
              </div>
            </div>
            <hr></hr>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
