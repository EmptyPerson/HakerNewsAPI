import React from 'react';
import {render} from 'react-dom'
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
// import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));
render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
