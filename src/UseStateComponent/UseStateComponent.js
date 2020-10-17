import React, {useState} from 'react'
import './UseStateComponent.less'

const computeInitialCounter = () => {
  console.log('Some calculation...')
  return Math.trunc(Math.random() * 50)
}

const UseStateComponent = props => {
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter()
  })

  const [state, setState] = useState({
    title: 'Счетчик',
    date: Date.now(),
  })

  const [title, setTitle] = useState('')

  const increment = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1
    })
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  const onChangeTitle = () => {

    setState(prev => {
      return {
        ...prev,
        title: title
      }
    })
  }

  const onHandlerInput = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div className='counter'>
      <div className='counter__title'>
        <div className='counter__title-title'>Title: {state.title}</div>
        <div className='counter__title-date'>Date: {state.date}</div>
      </div>
      <div className='counter__display'>Счетчик : {counter}</div>
      <div className='counter__btn'>
        <div className='counter__btn-add' onClick={increment}>Добавить</div>
        <div className='counter__btn-remove' onClick={decrement}>Убрать</div>
      </div>
      <div className='counter__inp'>
        <input className='counter__inp-input' onChange={onHandlerInput}/>
        <div className='counter__inp-btn' onClick={onChangeTitle}>Изменить</div>
      </div>
    </div>
  )
}

export default UseStateComponent;