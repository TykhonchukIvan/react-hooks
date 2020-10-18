import React from 'react';
import UseStateComponent from './UseStateComponent/UseStateComponent';
import UseEffectComponent from './UseEffectComponent/UseEffectComponent';
import UseRefComponent from './UseRefComponent/UseRefComponent';
import UseMemoComponent from './UseMemoComponent/UseMemoComponent';

const App = props => {
  return (
    <>
      <UseStateComponent/>
      <UseEffectComponent/>
      <UseRefComponent/>
      <UseMemoComponent/>
    </>
  )
}
export default App;