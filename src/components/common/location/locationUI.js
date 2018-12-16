import React,{Component} from 'react'
import Header from '../header/headerContainer'
import randomString from 'random-string'
import {
    Location,
    Choose,
    ChooseBox,
    City,
    CityItem,
    Letter
} from './styledComponents'

export default class extends Component{
    render(){
        return (
            <Location>
            <Header>选择城市</Header>
            <Letter  onTouchMove={this.props.moveTouch} onTouchStart={this.props.moveStart}>
                <li>定位</li>
                <li>历史</li>
                <li>全部</li>
                {
                    this.props.city && Object.keys(this.props.city).map((val,index)=>{
                        return <li key={index} id={val.cityId}>{val.toUpperCase()}</li>
                    })
                }
            </Letter>
            <ChooseBox ref={el => this.scroll=el}>
                <div>
                    <Choose>
                        <h3 ref={el=>this.place=el}>当前定位城市</h3>
                        <ul>
                            <li>北京</li>
                        </ul>
                    </Choose>
                    <Choose>
                        <h3>历史选择</h3>
                        <ul>
                            {
                                this.props.historyCity.valueSeq().map((val)=>{
                                    return <li key={randomString()}>{val}</li>
                                })
                            }
                        </ul>
                    </Choose>
                    <City>
                        {
                            this.props.city && Object.keys(this.props.city).map((val,index)=>{
                                return (
                                    <div key={randomString()}> 
                                         <p className="letter" id={'p'+index}>{val.toUpperCase()}</p>
                                         <ul>
                                             
                                             {
                                                this.props.city[val].map((value)=>{
                                                    return <CityItem onClick={this.props.getCity}  key={randomString()}>{value.name}</CityItem>
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </City>
                </div>
            </ChooseBox>
        </Location>
        )
        
    }

    componentDidMount(){
        this.props.scroll(this.scroll)
    }


    componentDidUpdate() {
        let el = document.querySelectorAll('.letter')
        let index;
        for(var i=0;i<el.length;i++){
            if(el[i].innerText===this.props.value){
                index = i
            }
        }
        if(!!el[index]){
            this.props.scrollToElement(el[index])
        }else{
            this.props.scrollToElement(this.place)
        }
        
    }
}
