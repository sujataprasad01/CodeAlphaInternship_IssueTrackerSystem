import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reportWebVitals from './reportWebVitals';
// Reducers
import authReducer from './Controllers/Redux/authSlice'
import bugReducer from './Controllers/Redux/authSlice'
import userReducer from './Controllers/Redux/authSlice'

// Redux configure
const reducer=combineReducers({
  auth:authReducer,
  bug:bugReducer,
  user:userReducer,
})
const store=configureStore({
  reducer
})
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

ReactDOM.render(
  <Provider store={(store)}>
  <App/>
  </Provider>
)
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
