import React from "react";
import Listitem from './Listitem';

const List = ({ item, handleComplete, deleteItem }) => (

 

    <div>
       {item.map( g => <Listitem key={g.id} {...g} handleComplete={handleComplete} deleteItem={deleteItem} /> )}
    </div>


)

export default List;