// import { createStore } from 'redux';
// import rootReducer from '../reducer/rootReducer';
//
// const store = createStore(rootReducer);
//
// export default store;

import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import monitorReducersEnhancer from './enhancers/monitorReducer'
import loggerMiddleware from './middleware/logger'
import rootReducer from '../reducer/rootReducer'

export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)

    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    return store
}
