import React,{Component} from 'react'
import LocationUI from './locationUI'
import BScroll from 'better-scroll'
import _ from 'lodash'
import {connect} from 'react-redux'
import {INSERT_CITY} from './actionTypes'
import { Toast } from 'antd-mobile';

const locationState = (state)=>{
    return {
        historyCity:state.getIn(['location','historyCity'])
    }
}
const locationDispatch = (dispatch)=>{
    return {
        insertCity(payload){
            dispatch({
                type:INSERT_CITY,
                payload
            })
        }
    }
}

class Location extends Component{
    constructor(){
        super()
        this.state = {
            city:[],
            value:''
        }
        this.moveTouch = this.moveTouch.bind(this)
    }
    render(){
        return (
            <LocationUI 
            getCity={this.getCity.bind(this)} 
            {...this.props} 
            scroll={this.scroll.bind(this)} 
            {...this.state} 
            moveTouch={this.moveTouch}
            scrollToElement={this.scrollToElement.bind(this)}
            moveStart={this.moveStart.bind(this)}
            ></LocationUI>
        )
    }
    scroll(el){
        this.bScroll = new BScroll(el,{
            click:true
        })
    }

    scrollToElement(el){
        this.bScroll.scrollToElement(el)
    }

    moveStart(el){
        this.setState({
            value:el.target.innerText
        },()=>{
            this.showToast(this.state.value)
        })
    }
    getCity(e){
        this.props.insertCity(e.target.innerText)
        this.props.history.go(-1)
    }

    showToast(value) {
        Toast.info(value, 2, null, false);
    }

    moveTouch(e){
        let index = e.target.offsetTop/16
        let len = e.targetTouches[0].clientY - e.target.offsetTop - 100
        let newIndex = Math.floor(len/16 + index)
        if(e.currentTarget.children[newIndex]){
            let value = e.currentTarget.children[newIndex].innerText
            this.showToast(value)
            this.setState({
                value
            })
        }
    }

    componentDidMount(){
        fetch('/gateway?k=7345764',{
            headers:{
                'X-Host':'mall.film-ticket.city.list'
            }
        })
        .then(response => response.json())
        .then(result=>{
            let city = result.data.cities;
            for(var key of city){
                key.pinyin = key.pinyin.slice(0,1)
            }
            city = _.sortBy(city,function(item){
                return item.pinyin
            })
            city = _.groupBy(city,'pinyin')
            this.setState({
                city
            })
        })
    }
}

export default connect(locationState,locationDispatch)(Location)