import React from 'react'
import Header from 'components/common/header/headerContainer'
import ListBottom from './views/list-bottom'
import ListList from './views/list-list'
import randomString from 'random-string'

import {
    ListContainer,
    ListMain,
    ListSearch,
    ListNav,
    ListDate,
    ListItem
} from './styledComponents'

export default class extends React.Component{
    render(){
        return (
            <ListContainer>
                <Header>{this.props.address}</Header>
                <ListMain>
                    <ListSearch>
                        <div>
                            <div>
                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1989"  width="13" height="13"><path fill="#00be88" d="M532.465674 240.369341c79.918457 0 144.692315 64.773858 144.692315 144.692315S612.384131 529.753972 532.465674 529.753972s-144.692315-64.773858-144.692315-144.692315S452.547217 240.369341 532.465674 240.369341zM849.888278 385.061657c0-175.18617-142.134106-317.320276-317.422604-317.320276S215.04307 209.875487 215.04307 385.061657c0 64.05756 18.930748 123.510343 51.573499 173.446587L266.104927 558.508244l237.913461 380.149895c5.116419 10.437494 15.963226 17.60048 28.447287 17.60048s23.22854-7.162986 28.447287-17.60048l237.913461-380.149895L798.212451 558.508244C830.855201 508.572 849.888278 449.119217 849.888278 385.061657z" p-id="1990"></path></svg>
                                <span>北京</span>
                            </div>
                            <div>
                                <div>
                                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2767"  width="20" height="13"><path fill="#bbb" d="M954.186 859.557l-132.043-132.043c139.81-186.414 93.206-450.499-85.439-582.542-163.111-124.276-396.129-108.741-543.707 38.836-163.111 163.111-163.111 427.198 0 590.309 147.578 147.578 372.827 163.111 543.707 38.836l132.043 132.043c23.301 23.301 62.138 23.301 85.439 0 23.301-15.534 23.301-54.371 0-85.439zM721.169 719.747c-62.138 62.138-147.578 100.974-240.784 100.974s-178.646-38.836-240.784-100.974c-132.043-132.043-132.043-349.525 0-481.568s349.525-132.043 481.568 0 132.043 349.525 0 481.568z" p-id="2768"></path></svg>
                                    <input type="text" placeholder={this.props.address}/>
                                </div>
                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2681"  width="10" height="10"><path fill="#bbb" d="M870.4 148.48C773.12 51.2 650.24 0 512 0S250.88 51.2 148.48 148.48C51.2 250.88 0 368.64 0 512s51.2 261.12 148.48 363.52c102.4 102.4 220.16 148.48 363.52 148.48s261.12-51.2 363.52-148.48c102.4-102.4 148.48-220.16 148.48-363.52S972.8 250.88 870.4 148.48zM768 691.2l-66.56 66.56-179.2-179.2-179.2 179.2-66.56-66.56L460.8 512 276.48 332.8l66.56-66.56 179.2 179.2 179.2-179.2L768 332.8 588.8 512 768 691.2z" p-id="2682"></path></svg>
                            </div>
                        </div>
                    </ListSearch>
                    <ListNav>
                        <div>
                            <ul ref={el => this.ulWidth=el}>
                                {
                                    this.props.listData.navigation && this.props.listData.navigation.head.models.map((val,i)=>{
                                        return <ListItem onClick={()=>{
                                            this.props.active(i)
                                        }} i={i} {...this.props} key={randomString()}>{val.name}</ListItem>
                                    })
                                }
                            </ul>
                        </div>
                        {
                            this.props.bstop ? (
                                <div>
                                    <div>
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4691"  width="15" height="15"><path fill="#bbb" d="M542.193 707.027c17.955000000000002 17.95499999999999 17.956000000000017 47.053 2.1316282072803006e-14 65.006v0c-17.95499999999999 17.955000000000002-47.053 17.956000000000017-65.006 2.1316282072803006e-14l-455.05600000000015-455.0559999999997c-17.955000000000002-17.95499999999999-17.956000000000017-47.053-2.1316282072803006e-14-65.006v0c17.95499999999999-17.955000000000002 47.053-17.956000000000017 65.006-2.1316282072803006e-14l455.05600000000015 455.0559999999997z" p-id="4692"></path><path fill="#bbb" d="M936.867 251.96699999999987c17.95499999999999-17.955000000000002 47.053-17.956000000000017 65.006-2.1316282072803006e-14v0c17.955000000000002 17.95499999999999 17.956000000000017 47.053 2.1316282072803006e-14 65.006l-455.0559999999997 455.05600000000015c-17.95499999999999 17.955000000000002-47.053 17.956000000000017-65.006 2.1316282072803006e-14v0c-17.955000000000002-17.95499999999999-17.956000000000017-47.053-2.1316282072803006e-14-65.006l455.0559999999997-455.05600000000015z" p-id="4693"></path></svg>
                                    </div>
                                </div>
                            ) : null
                        }
                        
                    </ListNav>
                    <ListDate>
                        <div>
                            <ul>
                                {
                                    this.props.listDate.length !== 0 && this.props.listDate.map((val)=>{
                                        return (
                                            <li key={randomString()}> 
                                                {/* <p>{eval((()=>{
                                                    return val.month.slice(5)
                                                }))()}</p> */}
                                                <p>{val.month.slice(5)}</p>
                                                <span>￥{val.monthMinPrice}起</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <div>
                                展开日历    
                            </div>
                        </div>
                    </ListDate>
                    <ListList {...this.props}></ListList>
                </ListMain>
                <ListBottom></ListBottom>
            </ListContainer>
        )
    }

    componentDidUpdate(){
        this.props.compareWidth(this.ulWidth.offsetWidth)

    }
}