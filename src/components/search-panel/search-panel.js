import React from 'react';
import './search-panel.css'
const SearchPanel=()=>{  //htmlFor,className='search'
  const searchText='type to search';
  //const style={//передаємо стилі
  //  fontSize:"16px"
  //}
  return <input type='text'
  className="form-control search-input"
   placeholder={searchText}
//style={style}
  
  />
} 

export default SearchPanel;
