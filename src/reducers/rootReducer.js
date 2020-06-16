import {combineReducers} from 'redux'
import mergeReducer from './mergeSort/mergeReducer'
import arrayReducer from './array/arrayReducer'

const rootReducer = combineReducers({
    arr: arrayReducer,
    merge: mergeReducer
})

export default rootReducer