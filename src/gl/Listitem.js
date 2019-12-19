import React from "react";

const styles = {
  complete: {
    color: 'Red',
    textDecoration: 'line-through'
  }
}

const Listitem = ({ id, item, type, price, complete, handleComplete, deleteItem }) => (
  <li 
    style={ complete ? { ...styles.complete } : {} }
    onClick={() => handleComplete(id)}
  >
    { item } - { price }
    <button onClick={() => deleteItem(id)}>Delete</button>
  </li>
)



export default Listitem; 