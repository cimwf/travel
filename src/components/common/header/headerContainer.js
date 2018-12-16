import React,{Component} from 'react'
import {HeaderContainer} from './styledComponents'
import {withRouter} from 'react-router-dom'
class Header extends Component {
    render(){
        return (
            <HeaderContainer>
                <div>
                    <svg onClick={this.goBack.bind(this)} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8166"  width="20" height="20"><path d="M924.136 473.895H175.849l346.396-346.396c14.561-14.561 14.561-38.149 0-52.709-14.561-14.561-38.149-14.561-52.709 0L59.51 484.815c-14.561 14.561-14.561 38.149 0 52.709L469.536 947.55c7.28 7.28 16.817 10.92 26.355 10.92 9.537 0 19.074-3.64 26.355-10.92 14.561-14.561 14.561-38.149 0-52.709L175.849 548.445h748.287c20.585 0 37.275-16.69 37.275-37.275 0-20.585-16.69-37.275-37.275-37.275z" fill="#00be88" p-id="8167"></path></svg>
                </div>
                <div>
                    {this.props.children}
                </div>
                <div></div>
            </HeaderContainer>
        )
    }
    goBack(){
        this.props.history.go(-1)
    }
    
}

export default withRouter(Header)