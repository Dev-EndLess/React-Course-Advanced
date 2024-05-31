import { createStore } from 'redux'
import rootReducer from './reducers/index'

// create store
export const store = createStore(rootReducer, {})
