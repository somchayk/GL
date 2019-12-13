import React from "react";

const Gl = ({ id, item, type, price }) => {

  return (
    <div>
      <h4> {id}.  Item: {item} - Type: {type} - Price: {price}  </h4>
    </div>
  );
};



export default Gl;