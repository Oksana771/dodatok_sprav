import React, { Component } from 'react';
import './panel_to_be_done.css';


export default class PanelToBeDone extends Component{


render(){
  return (
    <form className="item-add-form d-flex">
  <input type='text'
  className="form-control search-input"
   placeholder="What needs to be done"  />
  <button className='btn btn-outline-secondary add-item'>Add Item</button>
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