import {INSERT_CITY} from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    historyCity:[]
})

export default (state=defaultState,action)=>{
    if(action.type===INSERT_CITY){
        return state.update('historyCity',list=>list.push(action.payload).toSet().toList())
    }
    return state
}