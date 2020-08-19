import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

var composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var middleware = composeEnhancer(applyMiddleware(thunk));

var store = createStore(rootReducer, middleware);

export default store;