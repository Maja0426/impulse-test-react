import React, { useRef } from "react";
import "./Search.css";

const Search = (props) => {
  const searchInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredInput = searchInput.current.value;
    props.onSearch(enteredInput);
    searchInput.current.value = "";
  };

  return (
    <div className='input-wrapper'>
      <form onSubmit={submitHandler}>
        <label aria-label='search' htmlFor='searchBar'></label>
        <input
          id='searchBar'
          type='text'
          placeholder='Search'
          ref={searchInput}
        />
        <button type='submit' className='submit-btn'>
          Keresés
        </button>
      </form>
    </div>
  );
};

export default Search;
