import React, { useState, useEffect, useRef } from 'react';
import './UseRefComponent.less';

export default () => {
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    renderCount.current++
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div className='ref-container'>
      <div className='ref-container__title'>Количество рендеров: {renderCount.current}</div>
      <div>Прошлое состояние: {prevValue.current} </div>
      <div className='ref-container__inp'>
        <input ref={inputRef}
               onChange={e => setValue(e.target.value)}
               value={value}
               className='ref-container__inp-input'/>
        <div className='ref-container__inp-btn' onClick={focus}>Фокус</div>
      </div>
    </div>
  )
};