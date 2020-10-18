import React from 'react'
import { useAlert } from './AlertContext';

const ComponentContext = () => {
  const { toggle } = useAlert()
  return (
    <>
      <h1 className='context__title'>Context</h1>
      <div className='context__btn' onClick={toggle}>Показать alert</div>
    </>
  )
};
export default ComponentContext;