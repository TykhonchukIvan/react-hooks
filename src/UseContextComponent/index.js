import React from 'react';
import ComponentContext from './ComponentContext';
import Alert from './Alert';
import { AlertProvider } from './AlertContext';
import './UseContextComponent.less';

export default () =>
    <AlertProvider>
      <div className='context'>
        <ComponentContext/>
        <Alert/>
      </div>
    </AlertProvider>
