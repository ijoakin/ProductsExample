import {ProductReducer} from "./ProductReducer"
import {History} from 'history';
const rootReducer = (history: History) => ProductReducer;

export default rootReducer;