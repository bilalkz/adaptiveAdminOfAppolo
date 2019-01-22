import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import rootReducer from './reducers';
import sagas from './sagas';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { routerMiddleware } from 'connected-react-router'

const persistConfig = {
    key: 'root',
    storage,
}

const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer(history))

if(window.navigator.userAgent.includes('Chrome')){

}
export const store = createStore(
    rootReducer(history),
    compose(
        applyMiddleware(
          routerMiddleware(history), // for dispatching history actions
          sagaMiddleware,
        ),
      ),
)

export const persistor = persistStore(store)

sagaMiddleware.run(sagas)

