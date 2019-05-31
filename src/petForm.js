import React from "react";

const petForm = props => {
  return (
    <form onSubmit={props.getUser}>
      <input
        style={{ margin: "20px auto", display: "block" }}
        type="text"
        name="petName"
      />
      <button>Submit</button>
    </form>
  );
};

export default petForm;
