import {combineReducers} from 'redux'
import arrayReducer from './array/arrayReducer'

const rootReducer = combineReducers({
    arr: arrayReducer
})

export default rootReducer