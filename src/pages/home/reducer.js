import {HOME_ROUTE} from './actionTypes'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    route:'spring'
})

export default (state=defaultState,action)=>{
    if(action.type === HOME_ROUTE){
        return state.setIn(['route'],action.payload)
    }
    return state
}