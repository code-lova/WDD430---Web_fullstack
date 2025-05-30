import React from "react";
import { useState } from "react";

const NewTodoForm = ({onSubmit}) => {
    
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} action="" className="new-item-form">
      <div className="form-row">
        <label htmlFor="item"> New Item </label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add Item</button>
    </form>
  );
};

export default NewTodoForm;
