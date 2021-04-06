import { createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialState } from './ProductReducer';
import rootReducer from './rootReducer';

const composeEnhancers = composeWithDevTools({})
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, initialState, composeEnhancers);