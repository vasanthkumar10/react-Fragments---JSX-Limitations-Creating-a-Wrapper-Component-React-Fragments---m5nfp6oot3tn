import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    // code here
      listx.map((value) => <ListItems valuex={value}  />)
      
    
    
  )
}

export default List;