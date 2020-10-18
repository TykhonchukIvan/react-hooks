import React, {useState, useCallback} from 'react';
import ItemsList from './ItemsList';
import './UseCallbackComponent.less';

const UseCallbackComponent = () => {

  console.log('Render UseCallbackComponent')

  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  const generateItems = useCallback((indexNumber)=>{
      return new Array(count).fill('').map((el, index) => {
        return `Элемент ${index + indexNumber}`
      })
  }, [count])

  return (
    <div className='generate-items-container'>
      <div className='generate-items-container__title' style={styles}>
        Количество элементов: {count}</div>
      <div className='generate-items-container__block'>
        <div className='generate-items-container__block-add'
             onClick={() => setCount(prev => prev + 1)}>
          Добавить
        </div>
        <div className='generate-items-container__block-change'
             onClick={() => setColored(prev => !prev)}>
          Изменить
        </div>
      </div>
      <div className='generate-items-container__display'>
        <ItemsList getItems={generateItems}/>
      </div>
    </div>
  )
}
export default UseCallbackComponent;