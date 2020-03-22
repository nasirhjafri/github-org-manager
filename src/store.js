/* eslint-disable no-undef */
import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

let composeEnhancers = compose

// if (APP_ENV === 'local') {
//     const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     if (typeof composeWithDevToolsExtension === 'function') {
//         composeEnhancers = composeWithDevToolsExtension
//     }
// }

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(
        sagaMiddleware,
        logger
    ))
)

sagaMiddleware.run(sagas)

export default store
