import React,{Component} from 'react'
import { Carousel } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import './swiper.css'

class SwiperContainer extends Component{
    state = {
        data: [],
      }
      componentDidMount() {
        // simulate img loading
          this.setState({
            data: ['31/wKjFbFvZBWuAFzNvAAG-kPjZX4g579.png', '1F/wKjFbVuiMwSAWP2HAAKL3P8RbfI104.jpg', '32/wKjFbFvdCu-AFp-AAAE_mawp9yw247.jpg','1F/wKjFbFuh9FWAKfxGAAJeFm-z8tY038.jpg','1F/wKjFbFuguxuAZQboAAIUMa6Zexc999.jpg','1F/wKjFbFuhvJKAa1IfAAIDxUQ-VXc996.jpg','1F/wKjFbVuhvryAcdeFAAJOyc9jd3E363.jpg'],
            indexData:['三亚',"新潟","欧洲","别样的假期","美加墨","南亚","东南亚"]
          });
    }
    render() {
        return (
            <Carousel
              autoplay={true}
              infinite
            >
              {this.state.data.map((val,index) => (
                <img
                  onClick={this.getIndex.bind(this,index)}
                  key={index}
                  src={`http://media.china-sss.com/img/M00/04/${val}`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                />
              ))}
            </Carousel>
        );
      }
      getIndex(index){

        this.props.history.push('/list/'+this.state.indexData[index])
      }
}


export default withRouter(SwiperContainer)