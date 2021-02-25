import { combineReducers } from 'redux';
import authReducer from "./authReducer";
import searchPincodeReducer from './searchPincodeReducer';
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    searchTerm : searchPincodeReducer,
    cart: cartReducer
})

export default rootReducer;