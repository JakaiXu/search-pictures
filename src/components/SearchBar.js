import React from "react";
import { useState } from "react";
const SearchBar = (props) => {
  const [term, setTerm] = useState(" ");


  const termCommitHandle = (e) => {
    setTerm(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSearchTerm(term);
  };
  return (
    <div className="ui container">
      <form className="ui form" onSubmit={submitHandler}>
        <div style={{margin:'10px'}}>
          <label className="ui pointing below label red">Enter a search term</label>
          <input
            value={term}
            className="ui input"
            placeholder="Search an item..."
            onChange={termCommitHandle}
          ></input>
        </div>
      </form>
      {/* <button
        // onClick={termSearchHandler}
        className="ui button primary fluid"
        style={{ marginTop: "10px" }}
      >
        Search
      </button> */}
   
    </div>
  );
};

export default SearchBar;
