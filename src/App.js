import React from 'react';
import UseStateComponent from './UseStateComponent/UseStateComponent';
import UseEffectComponent from './UseEffectComponent/UseEffectComponent';
import UseRefComponent from './UseRefComponent/UseRefComponent';
import UseMemoComponent from './UseMemoComponent/UseMemoComponent';
import UseCallbackComponent from './UseCallbackComponent/UseCallbackComponent';
import UseContextComponent from './UseContextComponent/UseContextComponent';

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