import React, {useState, useEffect} from 'react';

const ItemsList = ({getItems}) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const newItems = getItems(10)
    setItems(newItems)
  }, [getItems])

  return (
    <ul>
      {items.map((el, index)=><li key={index}>{el}</li>)}
    </ul>
  )
}

export default ItemsList