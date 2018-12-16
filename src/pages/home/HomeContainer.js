import React,{Component} from 'react'
import { TabBar } from 'antd-mobile'
import { connect } from 'react-redux'

import spring from 'images/spring.png'
import springActive from 'images/spring-active.png'
import map from 'images/map.png'
import mapActive from 'images/map-active.png'
import find from 'images/find.png'
import findActive from 'images/find-active.png'
import mine from 'images/mine.png'
import mineActive from 'images/mine-active.png'
import phone from 'images/phone.png'
import phoneActive from 'images/phone-active.png'
import {HOME_ROUTE} from './actionTypes'

import {Spring} from '../spring'
import {Map} from '../map'
import {Find} from '../find'
import {Mine} from '../mine'
import {Service} from '../service'

const homeState = (state)=>{
  return {
    route:state.getIn(['home','route'])
  }
}

const homeDispatch = (dispatch)=>{
  return {
    changeRoute(payload){
      dispatch({
        type:HOME_ROUTE,
        payload
      })
    }
  }
}

class HomeContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: props.route, //默认第一个
          fullScreen: true,
          service:false
        };
        
      }
    render(){
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#bbb" //没选中文字的颜色
          tintColor="#00be88" //选中文字的颜色
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="spring"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${spring}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${springActive}) center center /  25px 25px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'spring'}
            onPress={()=>{
              this.props.changeRoute('spring')
              this.setState({
                selectedTab:'spring'
              })
            }}
            data-seed="logId"
          >
            <Spring></Spring>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${map}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${mapActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="目的地"
            key="map"
            selected={this.state.selectedTab === 'map'}
            onPress={()=>{
              this.props.changeRoute('map')
              this.setState({
                selectedTab:'map'
              })
            }}
            data-seed="logId1"
          >
              <Map></Map>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${find}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${findActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="发现"
            key="find"
            selected={this.state.selectedTab === 'find'}
            onPress={()=>{
              this.props.changeRoute('find')
              this.setState({
                selectedTab:'find'
              })
            }}
          >
            <Find></Find>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${phone}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${phoneActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="客服"
            key="phone"
            selected={this.state.selectedTab === 'phone'}
            onPress={()=>{
              this.setState({
                service:!this.state.service
              })

            }}
          >
            
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${mine}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${mineActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="我的"
            key="mine"
            selected={this.state.selectedTab === 'mine'}
            onPress={()=>{
              this.props.changeRoute('mine')
              this.setState({
                selectedTab:'mine'
              })
            }}
          >
            <Mine></Mine>
          </TabBar.Item>
        </TabBar>
        <Service bstop={this.state.service} closeDiv={this.closeDiv.bind(this)}></Service>
      </div>
        )
    }

    closeDiv(e){
      if(e.target.className.baseVal === 'closeDiv'){
        this.setState({
          service:false
        })
      }else if(e.target.className.baseVal !== '' && e.target.className.includes('closeDiv')){
        this.setState({
          service:false
        })
      }
      
    }
}

export default connect(homeState,homeDispatch)(HomeContainer)