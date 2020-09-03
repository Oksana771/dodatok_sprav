import React, { Component } from 'react'; //підключаємо компонент react
//import ReactDOM from 'react-dom';//використання лише в index

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from'../item-status-filter';

import './app.css'
import PanelToBeDone from '../panel_to_be_done';



export default class App extends Component{
  maxId=100;//створили нову зміну для генерації id
state={
  todoList:[  //масив з обєктами для стилів
    this.createTodoItem("Drink Coffe"),
    this.createTodoItem("Walking"),
    this.createTodoItem("Drink Tea")
   // {label:"Drink Coffe",important:false,id:1},
  //  {label:"Walking",important:true,id:2},
  //  {label:"Drink Tea",important:false,id:3},
],
term:'', //додали ключ який приймає функція пошуку
filter:'all'

}
createTodoItem(label){
return{
label,
important:false,
done:false,
id:this.maxId++
}
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
//функція додавання тексту з інпута в список:
addItem = (text)=>{
 const newItem=this.createTodoItem(text) //визвали функцію 
  //сгенерували id:
/*const newItem={
  label:text,
  important:false,
  id:this.maxId++
}*/
//створили новий обєкт з новим масивом:
this.setState(({todoList})=>{
  const newArray=[
    ...todoList, //...-оператор spred який розгортає властивості
    newItem
  ];
  return{
    todoList:newArray
  }
})

}
onToggleDone=(id)=>{ //функція виконаних завдать
//обновили обєкт:
this.setState(({todoList})=>{
  const idx=todoList.findIndex((el) =>el.id===id); //шукаємо індекс
  const oldItem=todoList[idx] //змінна зі старим індексом
  const newItem={
    ...oldItem,done:!oldItem.done //утворили новий масив зі старих ключів і перезаписали один ключ done
    
  }
 
 const newArray=[...todoList.slice(0,idx),newItem,...todoList.slice(idx+1)];
 return{
   todoList:newArray
 }
 
})



}
onToggleImportant=(id)=>{
  this.setState(({todoList})=>{
    const idx=todoList.findIndex((el) =>el.id===id); //шукаємо індекс
    const oldItem=todoList[idx] //змінна зі старим індексом
    const newItem={
      ...oldItem,important:!oldItem.important //утворили новий масив зі старих ключів і перезаписали один ключ done
      
    }
   
   const newArray=[...todoList.slice(0,idx),newItem,...todoList.slice(idx+1)];
   return{
     todoList:newArray
   }
   
  })
 } 
  //функція пошуку:///
  onSearchChange=(term)=>{ //функція яка змінює значення для term
    this.setState({term});
  }
  onFilterChange=(filter)=>{
    this.setState({filter});
      }
  search(items,term){ //функція пошуку яка приймає певний масив та ключ
    if(term.length===0){//перевірка щоб довжина term != 0
      return items;
    }
    return items.filter((item)=>{ //проходимо фільтром-шукаємо indexOf
      return item.label.toLowerCase().indexOf(term.toLowerCase())>-1;
    })
  }
filter(items,filter){
  switch(filter){
    case 'all':
      return items;
    case 'active':
      return items.filter((item)=>!item.done);
    case 'done':
      return items.filter((item)=>item.done);
      default:
        return items;
  }
}
  render(){
    const{todoList,term,filter}=this.state;//робимо деструктаризацію 
    const visibleItems=this.filter(this.search(todoList,term),filter)//викликаємо фунцію search 
const doneCount=this.state.todoList.filter((item)=>item.done).length; //filter рахує скільки задач виконано
const todoCount=this.state.todoList.length-doneCount; //змінна не виконаних завдань
    return( //показуємо зміну логін
      <div className='todo-app'>
   
         <AppHeader toDo={todoCount} done={doneCount}/*кількість виконаних та не виконаних завдань*//> 
         <div className='top-panel d-flex'>
   <SearchPanel onSearchChange={this.onSearchChange}/*придумали властивість яка викликає дану функцію*//>
  <ItemStatusFilter 
  filter={filter}
  onFilterChange={this.onFilterChange}/>
   </div>
  <TodoList todos={visibleItems}
   onDeleted={this.deleteItem}/*передали компоненти та створили функцію яка видаляє*/
   onToggleDone={this.onToggleDone}/*викликали функцію */
   onToggleImportant={this.onToggleImportant}/>
  
  <PanelToBeDone onItemAdded={this.addItem}/*передали функцію додавання тексту*//>
  

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