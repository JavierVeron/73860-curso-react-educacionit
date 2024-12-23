import { createRoot } from 'react-dom/client'
import { combineReducers, createStore } from 'redux'
import { Provider } from "react-redux"
import App from './App.jsx'
import CartReducer from './ecommerceRedux/redux/CartReducer.js'
import ThemeReducer from './ecommerceRedux/redux/ThemeReducer.js'
import './index.css'

const rootReducer = combineReducers({cart:CartReducer, theme:ThemeReducer});
const store = createStore(rootReducer);

createRoot(document.getElementById('root')).render(<Provider store={store}><App /></Provider>)