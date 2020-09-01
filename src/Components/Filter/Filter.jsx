import React from "react";

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <>
      <label>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={(e) => onChangeFilter(e.target.value)}
        />
      </label>
    </>
  );
};

export default Filter;
