import React,{Component} from 'react'
import SpringUI from './springUI'
import {withRouter} from 'react-router-dom'

import {connect} from 'react-redux'

const springState = (state)=>{
    return {
        currentCity:state.getIn(['location','historyCity']).last()
    }
}

class Spring extends Component {
    constructor(props){
        super(props)
        this.state = {
            bstop:true,
            data1:[],
            data2:[],
            searchSwitch:true,
            likeData:[]
        }
    }
 
    render(){
        
        return (
            <SpringUI 
            goLocation={this.goLocation.bind(this)} 
            {...this.state} 
            goSearch={this.goSearch.bind(this)} 
            spanClick={this.spanClick.bind(this)}
            {...this.props}
            goDetail={this.goDetail.bind(this)}
            ></SpringUI>
        )
    }

    goSearch(){
        this.props.history.push('/search')
    }

    spanClick(dir,e){
        if(dir === 'left'){
            this.setState({
                bstop:true
            })
            this.bScroll.scrollToElement('.list1')
        }else{
            this.setState({
                bstop:false
            })
            this.bScroll.scrollToElement('.list2')
        }
    }
   
    goLocation(){
        this.props.history.push('/location')
    }
    
    goDetail(id){
        this.props.history.push('/detail?id='+id)
    }
      componentDidMount(){
        fetch('/queryContent?cityId=145&positionId=103&t=201811221858&springsign=D936A66C25B2746FFA16E32D4B76066279A08499')
        .then(response => response.json())
        .then(result =>{
            this.setState({
                data1:result.data.data
            })
        })
        fetch('/queryContent?cityId=145&positionId=104&t=201811221923&springsign=A37CE30A52EA042C883B35D087BD21DA205261F4')
        .then(response => response.json())
        .then(result =>{
            this.setState({
                data2:result.data.data
            })
        })
        fetch('/queryContent?cityId=145&positionId=101&t=201811231948&springsign=81530BA367AE007FD20814A532AFF93F6D237D25')
        .then(response => response.json())
        .then(result =>{
            this.setState({
                likeData:result.data.data
            })
        })
    }


}

export default withRouter(connect(springState)(Spring))