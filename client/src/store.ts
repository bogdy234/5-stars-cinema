import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {logger} from "redux-logger";
import userReducer from "./reducers/user";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}

// @ts-ignore
const persistedUserReducer = persistReducer(persistConfig, userReducer)
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducers({persistedUserReducer}), composeEnhancers(applyMiddleware(logger)));
export const persistor = persistStore(store);

export default {store, persistor};
