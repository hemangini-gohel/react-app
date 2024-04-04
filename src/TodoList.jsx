import styles from "./TodoList.module.css";

const TodoList = (props) => {
  const markDone = (item) => {
    alert(`you clicked - ${item} `);
  };
  return (
    <>
      <div className={`container w-50 ${styles.todoContainer}`}>
        <center className="heading">Todo List</center>
        {/* eslint-disable-next-line react/prop-types */}
        {props.listItems.map((item) => (
          <div key={item}>
            <div className="row my-2">
              <div className="col-8">
                <span className={styles.itemName}>{item}</span>
              </div>
              <div className="col-4">
                <button
                  className={`btn btn-light fw-bold ${styles.markDoneBtn}`}
                  onClick={() => markDone(item)}
                >
                  Mark Done
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
