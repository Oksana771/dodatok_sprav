import React, { Component } from 'react'; //підключаємо компонент react
//import ReactDOM from 'react-dom';//використання лише в index

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from'../item-status-filter';

import './app.css'
import PanelToBeDone from '../panel_to_be_done';



export default class App extends Component{
state={
  todoList:[  //масив з обєктами для стилів
    {label:"Drink Coffe",important:false,id:1},
    {label:"Walking",important:true,id:2},
    {label:"Drink Tea",important:false,id:3},
]
}
deleteItem=(id)=>{ //відповідає функція за видалення пункта яка приймає id
//console.log(id)
this.setState(({todoList}) =>{ //метод який перезапише пункт та приймає todoList
  const idx=todoList.findIndex((el) =>el.id===id); //змінна яка шукає id
 // console.log(idx)
 //змінні які містять елементи зліва та справа
 const left=todoList.slice(0,idx); // slice-метод копіює елементи з масиву вказуємо 'від і до'
 const right=todoList.slice(idx+1); // вказуємо 'від і до кінця'
 const newArray=[...left,...right];//сформували новий масив з розгорнутими елементами
 return{ //повернули значення з новим масивом
   todoList:newArray
 }
})
}
  render(){
    return( //показуємо зміну логін
      <div className='todo-app'>
   
         <AppHeader toDo={1} done={3}/>
         <div className='top-panel d-flex'>
   <SearchPanel/>
  <ItemStatusFilter/>
   </div>
  <TodoList todos={this.state.todoList}
   onDeleted={this.deleteItem}/*передали компоненти та створили функцію яка видаляє*//>
  
  <PanelToBeDone/>
  

  </div>//передаємо назву компонента
  )
  }




}
  


   
/*const App=()=>{
    const todoList=[  //масив з обєктами для стилів
        {label:"Drink Coffe",important:false,id:1},
        {label:"Walking",important:true,id:2},
        {label:"Drink Tea",important:false,id:3},
    ]
  //створення елементів
 // const el='<script>alert("hi")</script>' {el}
  /*const login= <span>Login please</span>;   {isLogin ? welcome:login} 
  const welcome= <span>Welcome</span>;
  const isLogin=false;
  return( //показуємо зміну логін
    <div className='todo-app'>
 
       <AppHeader toDo={1} done={3}/>
       <div className='top-panel d-flex'>
 <SearchPanel/>
<ItemStatusFilter/>
 </div>
<TodoList todos={todoList} onDeleted={(id)=>console.log(`Deleted: ${id}`)}/*передали компоненти та створили функцію яка видаляє/>
<div className='top-panel d-flex'>
<PanelToBeDone/>
<AddItem/>
</div>
</div>//передаємо назву компонента
)
}*/

    
  

//export default App;