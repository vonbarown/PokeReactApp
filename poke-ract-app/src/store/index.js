import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from "./reducers/index";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';


const loggerMiddleware = createLogger()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default store;