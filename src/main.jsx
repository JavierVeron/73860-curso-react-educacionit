import { createRoot } from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from "react-redux"
import App from './App.jsx'
import CartReducer from './ecommerceRedux/redux/CartReducer.js'
import './index.css'

const store = createStore(CartReducer);

createRoot(document.getElementById('root')).render(<Provider store={store}><App /></Provider>)