import React from "react";

const Gl = ({ id, item, type, price }) => {

  return (
    <div>
      <h2> {id} </h2>
      <h2> Item: {item} </h2>
      <h2> Type: {type} </h2>
      <h2> Price {price} </h2>
    </div>
  );
};



export default Gl;