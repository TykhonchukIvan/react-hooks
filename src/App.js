import React from 'react';
import UseStateComponent from "./UseStateComponent/UseStateComponent";
import UseEffectComponent from "./UseEffectComponent/UseEffectComponent";
import UseRefComponent from "./UseRefComponent/UseRefComponent";

const App = props => {
  return (
    <>
      <UseStateComponent/>
      <UseEffectComponent/>
      <UseRefComponent />
    </>
  )
}
export default App;