import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component{
 state={
   term:''
 }
  onSearchChange=(e)=>{
    const term=e.target.value;//отримуємо поточне значення для term
    this.setState({term});//перезаписую значення
    this.props.onSearchChange(term);//викликаємо дану функцію
  }
  render(){
   
    return <input type='text'
    className="form-control search-input"
     placeholder='type to search' value={this.state.term} onChange={this.onSearchChange}
     />
    
    }

}

 




/*const SearchPanel=()=>{  //htmlFor,className='search'
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

export default SearchPanel;*/
