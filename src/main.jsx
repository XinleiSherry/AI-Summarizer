import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from "./services/store";

//creates a root element in the DOM, selects the element with the id "root", and renders the <App /> component within it using ReactDOM. allows the React component hierarchy to be rendered and displayed on the web page.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
)
