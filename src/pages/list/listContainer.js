import React,{Component} from 'react'
import ListUI from './listUI'
import {withRouter} from 'react-router-dom' 

class List extends Component {
    constructor(){
        super()
        this.state = {
            bstop:true,  //nav中div的隐藏与显示
            listData:{},  //请求列表数据 
            listDate:[],  //数据日期
            index:0,      //高亮
            address:'三亚'    //地点
        }
    }
    render(){
        return (
            <ListUI 
                {...this.state}
                active={this.active.bind(this)}
                compareWidth={this.compareWidth.bind(this)}
            ></ListUI>
        )
    }
    active(i){
        this.setState({
            index:i
        })
    }

    compareWidth(width){
        if(width>window.innerWidth && !this.state.bstop){
            this.setState({
                bstop:true
            })
        }else if(width<window.innerWidth && this.state.bstop){
            this.setState({
                bstop:false
            })
        }
    }

    componentDidMount(){
        this.setState({
            address:this.props.match.params.address
        },()=>{
            fetch('/query',{
                method:'POST',
                body:JSON.stringify({
                    data:{
                        keywords:this.state.address,
                        startCity:'北京'
                    }
                }),
            })
            .then(response => response.json())
            .then(result => {
                this.setState({
                    listData:result
                })
            })
            fetch('/queryMinPrice',{
                method:"POST",
                body:JSON.stringify({
                    data:{
                        keywords:this.state.address,
                        startCity:'北京'
                    }
                })
            }).then(response => response.json())
            .then(result => {
                this.setState({
                    listDate:result.productMinPriceMonthDTOList
                })
            })
        })
        
    }

}

export default withRouter(List)