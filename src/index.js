



import React from "react"

import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import Middle from './Middle'
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(window.location.pathname)
root.render(
  <React.StrictMode>
     <Middle/>
  </React.StrictMode>
  
);

