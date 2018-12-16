import React,{Component} from 'react'
import DetailUI from './detailUI'
class Detail extends Component{
    constructor(){
        super()
        this.state = {
            topSwitch:true, //头部
            arrows:true,  //箭头向上为true
            data:{},      //接收数据
            dateData:[]   //优惠券数据  
        }
    this.scrollHandler = this.handleScroll.bind(this);

    }
    componentWillMount(){
        fetch('/GetTourProduct',{
            method:'POST',
            body:'ProductId=165419&ChannelId=0&springsign=CEECC366AD8B36CD020B6E4422CACC5A5AA8CF32',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                'Referer':'http://m.springtour.com/tour/165419'
            }
        }).then(response=>response.json())
        .then(result=>{
            this.setState({
                data:result.Data
            })
        })
        fetch('/queryProductCoupon',{
            method:'POST',
            body:JSON.stringify({
                reqDtos:{
                    channelId:"154",
                    productId:"141296",
                    productSource:1,
                    shopId:''
                },
                springsign:"3FF7FEF757F94BC953C29E9DA4CD11D94F4FC113"
            })
        }).then(response=>response.json())
        .then(result=>{
            this.setState({
                dateData:result.data
            })
        })
    }
    render(){
        return (
            <DetailUI 
            {...this.state}
            changeArrows={this.changeArrows.bind(this)}
            scrollHandler={this.scrollHandler}
            ></DetailUI>
        )
    }
    changeArrows(){
        this.setState({
            arrows:!this.state.arrows
        })
    }
    componentDidMount(){
        
    }
    _handleScroll(scrollTop) {
        if(scrollTop>160){
            this.setState({
                topSwitch:false
            })
        }else{
            this.setState({
                topSwitch:true
            })
        }
    }
    handleScroll(event) {
        let scrollTop = event.srcElement.scrollTop;
        this._handleScroll(scrollTop);
    }
}

export default Detail