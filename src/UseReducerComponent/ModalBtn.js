import React from 'react';
import { useAlert } from './ModalContext';

export default () => {
  const {show} = useAlert()
  return (
    <div className='container-modal__btn' onClick={()=>show("Открытая модалка!")}>
      Показать
    </div>
  )
}
