import React from 'react';
import { ModalProvider } from './ModalContext';
import ModalBtn from './ModalBtn';
import Modal from './Modal';
import './UseReducerComponent.less';

export default () => {
  return (
    <ModalProvider>
      <div className='container-modal'>
        <ModalBtn />
        <Modal />
      </div>
    </ModalProvider>
  )
}