import { createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialState, ProductReducer } from './ProductReducer';
import rootReducer from './rootReducer';
import { createBrowserHistory } from 'history';

const composeEnhancers = composeWithDevTools({})
const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

export const store = createStore(rootReducer(history) , initialState, composeEnhancers);