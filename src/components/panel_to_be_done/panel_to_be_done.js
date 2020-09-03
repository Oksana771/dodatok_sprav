import React, { Component } from 'react';
import './panel_to_be_done.css';


export default class PanelToBeDone extends Component{
  state={
    label:''
  }
onLabelChange=(e)=>{ //функція яка виводить значення з інпута
  this.setState({
    label:e.target.value
  })
 // console.log(e.target.value);
}
onSubmit=(e)=>{ //забираємо значення позамовчукванню з форми
  e.preventDefault()
  this.props.onItemAdded(this.state.label);
   this.setState({ //автоматичне оновлення інпута
     label:''
   })
}
render(){
  return (
    <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
    
  <input type='text'
  className="form-control search-input"
   placeholder="What needs to be done" 
   onChange={this.onLabelChange} 
   value={this.state.label}/*автоматичне оновлення інпута*//>
  <button className='btn btn-outline-secondary add-item'
  onClick={()=>this.props.onItemAdded}/*додали функцію до кнопки */>Add Item</button>
</form>
  

);
}


}






/*const PanelToBeDone=()=>{  
  return (
    <form className="item-add-form d-flex">
  <input type='text'
  className="form-control search-input"
   placeholder="What needs to be done"  />
  <button className='btn btn-outline-secondary add-item'>Add Item</button>
</form>
  

);
} 

export default PanelToBeDone;*/