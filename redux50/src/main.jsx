import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const defaultValues = {
  cash: 1000,
}


// Reducer(после Диспечера)
const cashReducer = (state = defaultValues, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload }
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload }
    default:
      return state;
  }
}

// Store(Банк)
const store = createStore(cashReducer);



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
)
