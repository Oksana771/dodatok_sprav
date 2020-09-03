import React,{Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component{ //перетворення на клас
/*state={ //створили обєкт відслідковуємо в якому стані пункти списку
    done:false,
    important:false
}*/

  /*onLabelClick=()=>{ //описуємо функцію
this.setState(({done})=>{ //функція повертає done //обновляє функція яка приймає значення що при кліку закреслений пункт
return{
     done:!done //повертає обєкт зі станом done
}
   
}) 
     // console.log(`Done:${this.props.label}`)
    //  console.log(this.state.done)
   }    
    
   onMarkImportant=()=>{ 
    this.setState(({important})=>{ 
    return{
         important:!important
    }
       
    }) 
        
       }    */

    render(){ //якщо у списка змінюються властивості ця функція буде рендити
        const {label,onDeleted,onToggleDone,onToggleImportant,done,important}=this.props; //зробили деструктаризацію
        //const {done,important}=this.state;//щоб доступитись до state


        let classNames='todo-list-item '//змінна з класом батьківським
        if(done){  //перевірка в якому стані done
            classNames+='done ' //додаємо батьківському класу клас done

        }
        if(important){  
            classNames+='important ' 
            
        }
        const style={
            color:important?'red':'black',
            fontWeight:important?'bold':'normal'
        }
        return (
            <span className={classNames}>
            <span style={style} className='todo-list-item-label' //викликаємо функцію описану вище
             onClick={onToggleDone} >{label}</span> 
            <button type='button' className='btn btn-outline-success btn-sm float-right'
             onClick={onToggleImportant} >
                <i className='fa fa-exclamation'/>
            </button>
            <button type='button' className='btn btn-outline-danger btn-sm float-right'
            onClick={onDeleted}/*кнопці передали назву функції*/> 
                <i className='fa fa-trash-o'/>
            </button>
            </span>
            );
    }

}






/*const TodoListItem=({label,important})=>{ //добавили label,зробили другий пункт важливим
   // console.log(props.label)
 //  const {label,important}=props//деструктаризація - один обєкт на декілька елементів
 const style={
     color:important?'red':'black',
     fontWeight:important?'bold':'normal'
 }
    return (
    <span>
    <span style={style} className='todo-list-item'>{label}</span>
    <button type='button' className='btn btn-outline-success btn-sm float-right'>
        <i className='fa fa-exclamation'/>
    </button>
    <button type='button' className='btn btn-outline-danger btn-sm float-right'>
        <i className='fa fa-trash-o'/>
    </button>
    </span>
    );
}*/


//export default TodoListItem;