import { createRoot } from 'react-dom/client'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux"
import App from './App.jsx'
import CartReducer from './ecommerceRedux/redux/CartReducer.js'
import ThemeReducer from './ecommerceRedux/redux/ThemeReducer.js'
import './index.css'

const rootReducer = combineReducers({cart:CartReducer, theme:ThemeReducer});

// Creo mi función de Middleware
const myMiddleware = store => next => action => {
    console.log("Estoy dentro del Middleware!");
    console.log("Store:", store);
    console.log("Next:", next);
    console.log("Action:", action);

    if (action.type == "AGREGAR_PRODUCTO") {
        console.log("Agregaste el Producto #" + action.payload);
    }

    next(action);
}

const store = createStore(rootReducer, applyMiddleware(myMiddleware));

createRoot(document.getElementById('root')).render(<Provider store={store}><App /></Provider>)