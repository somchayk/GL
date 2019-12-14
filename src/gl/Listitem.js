import React from "react";

const styles = {
  complete: {
    color: 'Red',
    textDecoration: 'line-through'
  }
}

const Listitem = ({ id, item, type, price, complete, handleComplete }) => (
  <li 
    style={ complete ? { ...styles.complete } : {} }
    onClick={() => handleComplete(id)}
  >
    { item }
  </li>
)



export default Listitem; 