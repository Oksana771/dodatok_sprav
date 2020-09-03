import React,{Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component{

    buttons=[
        {name:'all',label:'All'},
        {name:'active',label:'Active'},
        {name:'done',label:'Done'}
    ]

    render(){ //повертає певний елемент

        const{filter,onFilterChange}=this.props;

        const buttons=this.buttons.map(({name,label})=>{
            const isActive=filter===name;//створили зміну та записали якщо filter тоді = name
            const clazz=isActive ? 'btn-info':'btn-outline-secondary'//якщо true має клас btn-info
        
        return(
            <button type='button'
            className={`btn ${clazz}`} key={name}
           onClick={()=>onFilterChange(name)}
         >{label}</button>
        )
    })
        return(
       <div className='btn-group'>
           {buttons}
       </div>
           
    );
     
    }
     
}


/*const ItemStatusFilter=()=>{
   return(
        <div className='btn-group'>
            <button className='btn btn-info'>All</button>
            <button className='btn btn-outline-secondary'>Active</button>
            <button className='btn btn-outline-secondary'>Done</button>
        </div>
    );
     
}*/
//export default ItemStatusFilter;