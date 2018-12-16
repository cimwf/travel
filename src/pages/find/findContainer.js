import React,{Component} from 'react'
import FindUI from './findUI'
import {withRouter} from 'react-router-dom'
class FindContainer extends Component{
    render(){
        return (
            <FindUI goSearch={this.goSearch.bind(this)}></FindUI>
        )
    }

    goSearch(){
        this.props.history.push('/search')
    }
}

export default withRouter(FindContainer)