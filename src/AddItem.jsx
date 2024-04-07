import { useRef } from "react";

/* eslint-disable react/prop-types */
const AddItem = ({ submitForm }) => {
  const itemElem = useRef("");
  const handleSubmit = (value) => {
    event.preventDefault();
    submitForm(value);
    itemElem.current.value = "";
  };
  return (
    <>
      <form
        className="d-flex my-3"
        onSubmit={() => handleSubmit(itemElem.current.value)}
      >
        <input
          placeholder="enter tasks here"
          className="form-control task-input"
          ref={itemElem}
        ></input>
        <button type="submit" className="btn btn-warning fw-bold">
          Create
        </button>
      </form>
    </>
  );
};
export default AddItem;
