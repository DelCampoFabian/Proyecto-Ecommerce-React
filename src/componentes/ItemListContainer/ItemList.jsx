import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {

  return (
    
    <div className="row justify-content-evenly m-auto col-lg-12">
    {
        items.map((item)=>{
            return  <Item item={item} key={item.id}/>
                    
        })
    }
    </div>
   
    
  )
}

export default ItemList