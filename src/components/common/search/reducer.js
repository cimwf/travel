import {GET_SEARCH_DATA,HISTORY_DEL} from './actionTypes'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    historyData:JSON.parse(localStorage.getItem('historyData')) || []
})

export default (state=defaultState,action)=>{
    if(action.type === GET_SEARCH_DATA){
        return state.update('historyData',list=>list.push(action.payload).toSet().toList())
    }

    if(action.type === HISTORY_DEL){
        return state.setIn(['historyData'],fromJS([]))
    }
    return state
}