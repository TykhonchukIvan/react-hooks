import React, {useState, useEffect} from 'react';
import './UseCreateHooks.less';

function useLogger(value) {
  useEffect(() => {
    console.log('value', value)
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: {value, onChange},
    value,
    clear,
  }
}

export default () => {
  const input = useInput('')

  useLogger(input.value)

  return (
    <div className='create-hooks'>
      <div className='create-hooks__title'>
        {input.value}
      </div>
      <div className='create-hooks__block'>
        <textarea className='create-hooks__input' {...input.bind} />

        <button onClick={()=>input.clear()}>Очистить</button>
      </div>
    </div>
  )
}