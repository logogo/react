import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import '@/assets/css/reset.css';
import 'antd/dist/antd.css';
import reduce from './store';
import router  from './router';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = {};
// build 不可看redux
if (process.env.CURRENT_ENV.includes('build')) {
    store = createStore(reduce, applyMiddleware(thunk));
} else {
    store = createStore(reduce, composeEnhancers(
        applyMiddleware(thunk)
    ));
}

ReactDOM.render(
    <Provider store = {store}>
         <React.StrictMode>
            <RouterProvider router={router} ></RouterProvider>
         </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
