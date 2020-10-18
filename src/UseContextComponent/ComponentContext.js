import React from 'react'
import { useAlert } from './AlertContext';

const ComponentContext = () => {
  const { toggle } = useAlert()
  return (
    <>
      <div className='context__title'>Context</div>
      <div className='context__btn' onClick={toggle}>Показать alert</div>
    </>
  )
};
export default ComponentContext;