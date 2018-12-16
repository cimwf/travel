import { createStore } from 'redux'
import reducers from './reducers'
import Immutable from 'immutable'

const initialState = Immutable.Map()
const store = createStore(reducers,initialState)

export default store