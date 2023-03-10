import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reduce from './store';
import routers from './router';

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
        <BrowserRouter>
            {routers.map(elt => {
                return <Route path={elt.path} exact={elt.exact} component = {elt.component} key={elt.key}/>;
            })}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
