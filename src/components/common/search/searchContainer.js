import React,{Component} from 'react'
import SearchUI from './SearchUI'
import {connect} from 'react-redux'
import {GET_SEARCH_DATA,HISTORY_DEL} from './actionTypes'
const searchState = (state)=>{
    localStorage.setItem('historyData',JSON.stringify(state.getIn(['search','historyData'])))
    return{
        historyData:state.getIn(['search','historyData'])
    }
}
const searchDispatch = (dispatch)=>{
    return{
        enterDown(e){
            if(e.keyCode === 13){
                dispatch({
                    type:GET_SEARCH_DATA,
                    payload:e.target.value
                })
                e.target.value = ''
            }
        },
        historyDel(){
            dispatch({
                type:HISTORY_DEL
            })
        }
    }
}

class Search extends Component {
    constructor(){
        super()
        this.state = {
            hotData:[]
        }
    }
    render(){
        return (
            <SearchUI {...this.state} {...this.props}></SearchUI>
        )
    }
    componentDidMount(){
        fetch('/site/search/GetHotSearchList')
        .then(response => response.json())
        .then(result => {
            this.setState({
                hotData:result.Data
            })
        })
    }
}

export default connect(searchState,searchDispatch)(Search)