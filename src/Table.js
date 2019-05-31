import React from "react";

const Table = props => {
  var name = props.name;
  var id = props.id;
  console.log(id);
  return (
    <ul>
      {name.map(name => {
        return <li key={name}>{name}</li>;
      })}
    </ul>
  );
};

export default Table;
