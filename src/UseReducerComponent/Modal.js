import React from 'react';
import {useAlert} from './ModalContext';

export default () => {
  const { visible, hide, text } = useAlert()
  if(!visible) return null
  return (
    <div className='container-modal__modal' onClick={hide}>
      {text}
    </div>
  )
}
