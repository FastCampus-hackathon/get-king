import { combineReducers } from 'redux'
import compReducer from './comp'
import scrapReducer from './scrap'

const rootReducer = combineReducers({scrap: scrapReducer, comp: compReducer})

export default rootReducer
