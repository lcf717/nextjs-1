import { combineReducers } from 'redux'
 import authReducer from '../Stores/Auth/reducer';
import alertProviderReducer from '../Stores/Alerts/reducer';
const rootReducers = combineReducers({ 
    
    authReducer: authReducer,
    alertProviderReducer: alertProviderReducer
})

export default rootReducers