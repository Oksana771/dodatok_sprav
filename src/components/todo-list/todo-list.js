import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css'
const TodoList=({todos,onDeleted})=>{//створили окремо компонент та отримали масив
const elements=todos.map((item)=>{ //передали масив який потрібно перезаписувати - map
  return(
  <li key={item.id} className='list-group-item'> 
    <TodoListItem {/*використали spred - розгорнули властивості якщо повторюються*/...item}
     onDeleted={()=>onDeleted(item.id)}/*зробили функцію яку повісили на пункти*//> 
   
  </li>
  )
});
   // const items=['List item 1','List item 2','List item 3'] //створили масив
    return(//передали значення масиву в список
    <ul className=' todo-list'> 
    {elements}
    </ul>
    )
  }
  export default TodoList;