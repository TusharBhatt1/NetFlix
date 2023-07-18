import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux'
import { Reduxstore } from './Store/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={Reduxstore}>
  <App />
</Provider>
  

)
