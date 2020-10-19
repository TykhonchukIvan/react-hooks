import React, {useContext, useReducer} from 'react';

const ModalContext = React.createContext();

export const useAlert = () => {
  return useContext(ModalContext)
}

const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_MODAL: return {
      ...state,
      visible: true,
      text: action.text
    };
    case HIDE_MODAL: return {
      ...state,
      visible: false,
    }
    default:
      return state
  }
}

export const ModalProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text:''
  })

  const show = (text) => dispatch({type: SHOW_MODAL, text})
  const hide = () => dispatch({type: HIDE_MODAL})

  return (
    <ModalContext.Provider value={{
      visible: state.visible,
      text: state.text,
      show,
      hide,
    }}>
      {children}
    </ModalContext.Provider>
  )
}