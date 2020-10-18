import React from 'react';
import UseStateComponent from './UseStateComponent';
import UseEffectComponent from './UseEffectComponent';
import UseRefComponent from './UseRefComponent';
import UseMemoComponent from './UseMemoComponent';
import UseCallbackComponent from './UseCallbackComponent';
import UseContextComponent from './UseContextComponent';

const App = () => {
  return (
    <>
      <UseStateComponent/>
      <UseEffectComponent/>
      <UseRefComponent/>
      <UseMemoComponent/>
      <UseCallbackComponent/>
      <UseContextComponent/>
    </>
  )
}
export default App;