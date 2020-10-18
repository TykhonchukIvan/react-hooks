import React from 'react';
import ComponentContext from './ComponentContext';
import Alert from './Alert';
import { AlertProvider } from './AlertContext';
import './UseContextComponent.less';


const UseContextComponent = () => {

  console.log('Render UseContextComponent')

  return (
    <AlertProvider>
      <div className='context'>
        <ComponentContext/>
        <Alert/>
      </div>
    </AlertProvider>
  )
}
export default UseContextComponent;