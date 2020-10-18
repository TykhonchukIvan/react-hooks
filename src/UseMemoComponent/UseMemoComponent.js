import React, {useState, useEffect, useMemo} from 'react';
import './UseMemoComponent.less'

const complexCompute = (num) => {
  let i = 0;
  while (i < 1000000000) i++
  return num * 2;
}

const UseMemoComponent = () => {

  console.log('Render UseMemoComponent')

  const [number, setNumber] = useState(50)
  const [colored, setColored] = useState(false)


  const styles = useMemo(() => {
    return {color: colored ? 'darkred' : 'black'}
  }, [colored])

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])

  useEffect(() => {
    console.log('Styles change')
  }, [styles])

  return (
    <div className='computed-container'>
      <div className='computed-container__display'
           style={styles}>Вычисляемое свойство: {computed}
      </div>
      <div className='computed-container__block'>
        <div className='computed-container__block-add'
             onClick={() => setNumber(prev => prev + 1)}>Добавить
        </div>
        <div className='computed-container__block-remove'
             onClick={() => setNumber(prev => prev - 1)}>Убрать
        </div>
        <div className='computed-container__block-change'
             onClick={() => setColored(prev => !prev)}>Изменить
        </div>
      </div>
    </div>
  )

}
export default UseMemoComponent;