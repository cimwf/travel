import React,{Component} from 'react'
import MapUI from './mapUI'
import {withRouter} from 'react-router-dom'
class mapContainer extends Component {
    constructor(props){
        super()
        this.state = {
            listLeft:0,
            mapRightData:{}
        }
        this.listLeftClick = this.listLeftClick.bind(this)
    }
    componentWillMount(){
        fetch('/queryPositionContents?cityId=145&positionId=905&t=201811232145&springsign=75FE4EB348BDA579D2CAB75634B5B034B10CC00E')
        .then(response => response.json())
        .then(result => {
            this.setState({
                mapRightData:result.data
            })
        })
    }
    render(){
        return (
            <MapUI listLeftClick={(index,pageid,sign,e,t)=>{
                this.listLeftClick(index,pageid,sign,e,t)
            }} {...this.state} goSearch={this.goSearch.bind(this)} goback={this.goback.bind(this)}></MapUI>
        )
    }

    goback(){
        this.props.history.go(-1)
    }

    goSearch(){
        this.props.history.push('/search')
    }

    listLeftClick(index,pageid,sign,e,t){
        this.setState({
            listLeft:index
        })
        fetch(`/queryPositionContents?cityId=145&positionId=${pageid}&t=${t}&springsign=${sign}`,)
        .then(response => response.json())
        .then(result => {
            this.setState({
                mapRightData:result.data
            })
        })
    }
}

export default withRouter(mapContainer)