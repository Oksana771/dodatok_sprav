import React from 'react';
import './panel_to_be_done.css';

const PanelToBeDone=()=>{  //htmlFor,className='search'
  const searchText='What needs to be done';
  //const style={//передаємо стилі
  //  fontSize:"16px"
  //}
  return (
    
  <input type='text'
  className="form-control search-input"
   placeholder={searchText}  />
//style={style}
  

);
} 

export default PanelToBeDone;