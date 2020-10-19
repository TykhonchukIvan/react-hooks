import React from 'react';
import { useAlert } from './AlertContext';

const Alert = () => {
  const { visible, toggle } = useAlert()

  if (!visible) return null

  return(
    <div className='context__alert' onClick={toggle}>
      <div className='context__alert-text'>
        Очень важно
      </div>
    </div>
  )

}
export default Alert;