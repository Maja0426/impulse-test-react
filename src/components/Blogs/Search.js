import React, { useState } from "react";
import "./Search.css";

const Search = (props) => {
  const [enteredInput, setEnteredInput] = useState("");
  const inputHandler = (e) => {
    setEnteredInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSearch(enteredInput);
    setEnteredInput("");
  };

  return (
    <div className='input-wrapper'>
      <form onSubmit={submitHandler}>
        <label aria-label='search'></label>
        <input
          type='text'
          placeholder='Search'
          value={enteredInput}
          onChange={inputHandler}
        />
        <button type='submit' className='submit-btn'>
          Keresés
        </button>
      </form>
    </div>
  );
};

export default Search;
