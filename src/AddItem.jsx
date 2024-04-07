import { useState } from "react";

/* eslint-disable react/prop-types */
const AddItem = ({ submitForm }) => {
  const [itemInput, setItemInput] = useState("");
  const handleInputChange = (value) => {
    setItemInput(value);
  };
  const handleSubmit = (value) => {
    event.preventDefault();
    submitForm(value);
    setItemInput("");
  };
  return (
    <>
      <form className="d-flex my-3" onSubmit={() => handleSubmit(itemInput)}>
        <input
          placeholder="enter tasks here"
          className="form-control task-input"
          onChange={() => handleInputChange(event.target.value)}
          value={itemInput}
        ></input>
        <button type="submit" className="btn btn-warning fw-bold">
          Create
        </button>
      </form>
    </>
  );
};
export default AddItem;
