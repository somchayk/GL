import React from "react";
import Listitem from './Listitem';

const List = ({ item ,handleComplete }) => (

 

    <div>
       {item.map( g => <Listitem key={g.id} {...g} handleComplete = {handleComplete} /> )}
    </div>


)

export default List;