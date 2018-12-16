import React,{Component,Fragment} from 'react'
import { Tabs, WhiteSpace,Modal, List, WingBlank } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import randomString from 'random-string'

import {
    DetailContainer,
    DetailMain,
    DetailSwiper,
    DetailDetail,
    Favorable,
    Coupon,
    Recommend,
    DetailDate,
    AlertDiv
} from './styledComponent'
import DetailBottom from './views/detail-bottom'
import DetailTop from './views/detail-top'
import Swiper from 'swiper/dist/js/swiper.js'

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }
function renderTabBar(props) {
    return (<Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
  }
  const tabs = [
    { title: '行程介绍' },
    { title: '费用说明' },
    { title: '预订须知' },
  ];
export default class extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
        };
      }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
      }
      onClose = key => () => {
        this.setState({
          [key]: false,
        });
      }

      onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
          return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
          e.preventDefault();
        }
      }

      render(){
            let userMessage
          if(!!this.props.data.Pictures && this.props.dateData.length!==0){
            userMessage = (
                <Fragment>

                <DetailSwiper>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.props.data.Pictures.map((val)=>{
                                return (
                                    <div key={randomString()} className="swiper-slide">
                                        <img src={val.Url} alt=""/>
                                    </div>
                                )
                            })
                        }
                    </div>
                     {/* 如果需要分页器  */}
                    <div className="swiper-pagination"></div>
                </div>
                    <div>
                        <p>{this.props.data.City.Name}-{this.props.data.DestinationCity.Name} | {this.props.data.Branch.ShortName} | 产品编号 {this.props.data.ProductId}</p>
                        <div></div>
                    </div>
                </DetailSwiper>
                <DetailDetail {...this.props}>
                <h3>
                    {this.props.data.Name}
                    <svg onClick={this.props.changeArrows} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6171"  width="20" height="20"><path fill="#bbb" d="M65.612 702.882l63.397 64.032 383.606-380.993 380.377 384.196 63.925-63.49-443.779-448.221z" p-id="6172"></path></svg>
                </h3>
                <div>
                    <div>
                        <p>
                            ￥
                            <span>{this.props.data.MinPrice}</span>
                        </p>
                        起/人
                    </div>
                    <div>
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6955"  width="13" height="13"><path fill="#69c" d="M512 0C229.23264 0 0 229.22752 0 512s229.22752 512 512 512 512-229.22752 512-512S794.76736 0 512 0z m0 945.24416c-239.26784 0-433.23904-193.9712-433.23904-433.24416 0-239.26784 193.9712-433.23392 433.23904-433.23392 239.27296 0 433.23904 193.96608 433.23904 433.23392S751.27296 945.24416 512 945.24416zM503.69536 236.09344c-62.51008 2.39104-128.0768 44.5696-149.59616 155.5712 51.23584 8.35584 75.8272 11.93472 75.8272 11.93472s13.32224-95.47776 95.3088-84.74112c81.97632 10.74176 63.52896 82.36544 55.33184 96.68096-8.19712 23.87456-84.02944 81.16736-96.32768 115.77856-12.29824 34.6112-11.27424 99.072-11.27424 99.072h73.78432s-4.096-68.03968 36.8896-96.68608c40.99072-28.6464 105.7792-109.88032 79.92832-192.16896-28.1856-89.73824-97.3568-107.82208-159.872-105.44128z m-30.68416 511.90784h78.3616v-78.6944H473.0112v78.6944z" p-id="6956"></path></svg>
                        <div>
                            <div>
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9136"  width="15" height="15"><path fill="#fff" d="M512 64C262.4 64 64 262.4 64 512c0 249.6 198.4 448 448 448s448-198.4 448-448C960 262.4 761.6 64 512 64zM768 576 576 576l0 192L448 768 448 576 256 576 256 448l192 0L448 256l128 0 0 192 192 0L768 576z" p-id="9137"></path></svg>
                            </div>
                            <span>可分期支付</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p>行简住优</p>
                    </div>
                    <div>
                    注重性价比和旅游品质的自由行品牌。将出行交通上节约下来的成本用于提升旅行中的住宿品质，让游客在整个行程当中住得舒适、惬意。行简住优同时倡导简朴、绿色出行的环保理念。
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6955"  width="13" height="13"><path fill="#69c" d="M512 0C229.23264 0 0 229.22752 0 512s229.22752 512 512 512 512-229.22752 512-512S794.76736 0 512 0z m0 945.24416c-239.26784 0-433.23904-193.9712-433.23904-433.24416 0-239.26784 193.9712-433.23392 433.23904-433.23392 239.27296 0 433.23904 193.96608 433.23904 433.23392S751.27296 945.24416 512 945.24416zM503.69536 236.09344c-62.51008 2.39104-128.0768 44.5696-149.59616 155.5712 51.23584 8.35584 75.8272 11.93472 75.8272 11.93472s13.32224-95.47776 95.3088-84.74112c81.97632 10.74176 63.52896 82.36544 55.33184 96.68096-8.19712 23.87456-84.02944 81.16736-96.32768 115.77856-12.29824 34.6112-11.27424 99.072-11.27424 99.072h73.78432s-4.096-68.03968 36.8896-96.68608c40.99072-28.6464 105.7792-109.88032 79.92832-192.16896-28.1856-89.73824-97.3568-107.82208-159.872-105.44128z m-30.68416 511.90784h78.3616v-78.6944H473.0112v78.6944z" p-id="6956"></path></svg>
                    </div>
                </div>
                </DetailDetail>
                <Favorable>
                    优惠说明：
                </Favorable>
                <Coupon onClick={this.showModal('modal')}>
                    <div>
                        领券
                    </div>
                    <div>
                        <ul>
                            {
                                this.props.dateData.slice(0,3).map((val)=>{
                                    return (
                                        <li key={randomString()}>{val.couponInfo}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10644"  width="15" height="15"><path fill="#bbb" d="M818.885 538.14c0.61-1.221 1.677-2.288 2.138-3.508 10.68-22.277 7.173-49.739-11.747-67.59l-431.168-407.825c-23.497-22.277-60.571-21.207-82.848 2.287s-21.207 60.571 2.287 82.848l386.924 366.022-385.397 371.362c-23.344 22.43-23.953 59.504-1.524 82.848 11.442 11.902 26.852 18.003 42.11 18.004 14.647 0 29.293-5.492 40.584-16.479l427.201-411.79c0.762-0.762 1.070-1.982 1.982-2.747 0.61-0.61 1.221-1.070 1.982-1.677 3.508-3.508 5.187-7.781 7.474-11.746v0zM818.885 538.14z" p-id="10645"></path></svg>
                    </div>
                </Coupon>
                <Recommend>
                    <div>
                        <p>产品经理推荐：</p>
                        <div dangerouslySetInnerHTML={{__html:this.props.data.Recommend}}></div>
                    </div>
                </Recommend>
                <DetailDate>
                   <div>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12368"  width="20" height="20"><path fill="#00be88" d="M649.846154 236.307692v19.692308a19.692308 19.692308 0 1 0 39.384615 0V236.307692H748.307692a19.692308 19.692308 0 1 1 0-39.384615h39.384616a78.769231 78.769231 0 0 1 78.76923 78.769231v472.615384a78.769231 78.769231 0 0 1-78.76923 78.769231H236.307692a78.769231 78.769231 0 0 1-78.76923-78.769231V275.692308a78.769231 78.769231 0 0 1 78.76923-78.769231h39.384616a19.692308 19.692308 0 0 1 0 39.384615h59.076923V177.230769a19.692308 19.692308 0 0 1 39.384615 0V236.307692h275.692308z m39.384615 0V177.230769a19.692308 19.692308 0 1 0-39.384615 0V236.307692H590.769231a19.692308 19.692308 0 1 0 0-39.384615h-157.538462a19.692308 19.692308 0 1 0 0 39.384615H374.153846v19.692308a19.692308 19.692308 0 0 1-39.384615 0V236.307692H236.307692a39.384615 39.384615 0 0 0-39.384615 39.384616v78.76923h630.153846V275.692308a39.384615 39.384615 0 0 0-39.384615-39.384616h-98.461539z m137.846154 157.538462H196.923077v354.461538a39.384615 39.384615 0 0 0 39.384615 39.384616h551.384616a39.384615 39.384615 0 0 0 39.384615-39.384616v-354.461538zM295.384615 512h78.769231a19.692308 19.692308 0 1 1 0 39.384615h-78.769231a19.692308 19.692308 0 1 1 0-39.384615z m177.23077 0h78.76923a19.692308 19.692308 0 1 1 0 39.384615h-78.76923a19.692308 19.692308 0 1 1 0-39.384615z m177.230769 0h78.769231a19.692308 19.692308 0 1 1 0 39.384615h-78.769231a19.692308 19.692308 0 1 1 0-39.384615z m-354.461539 118.153846h78.769231a19.692308 19.692308 0 1 1 0 39.384616h-78.769231a19.692308 19.692308 0 1 1 0-39.384616z m177.23077 0h78.76923a19.692308 19.692308 0 1 1 0 39.384616h-78.76923a19.692308 19.692308 0 1 1 0-39.384616z" p-id="12369"></path></svg>
                       <p>出发日期</p>
                   </div>
                   <div>
                       <p>{this.props.data.SchedulePrices[0].ScheduleDate} 选择日期</p>
                       <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10644"  width="15" height="15"><path fill="#bbb" d="M818.885 538.14c0.61-1.221 1.677-2.288 2.138-3.508 10.68-22.277 7.173-49.739-11.747-67.59l-431.168-407.825c-23.497-22.277-60.571-21.207-82.848 2.287s-21.207 60.571 2.287 82.848l386.924 366.022-385.397 371.362c-23.344 22.43-23.953 59.504-1.524 82.848 11.442 11.902 26.852 18.003 42.11 18.004 14.647 0 29.293-5.492 40.584-16.479l427.201-411.79c0.762-0.762 1.070-1.982 1.982-2.747 0.61-0.61 1.221-1.070 1.982-1.677 3.508-3.508 5.187-7.781 7.474-11.746v0zM818.885 538.14z" p-id="10645"></path></svg>
                   </div>
                </DetailDate>
                <WingBlank>
                <WhiteSpace />
                <Modal
                popup
                visible={this.state.modal}
                onClose={this.onClose('modal')}
                animationType="slide-up"
                >
                <List>
                    <AlertDiv>
                        <div>
                            <p>领券</p>
                            <svg onClose={this.onClose('modal')} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5609"  width="15" height="15"><path d="M594.300826 508.403306l426.10248 426.102479-78.704132 75.213223L515.596694 583.616529 82.300826 1024 3.596694 941.487603l433.719008-440.277686L10.790083 75.213223 89.494215 0 515.596694 426.102479 941.699174 0l78.704132 82.300826z m0 0" fill="#bbb" p-id="5610"></path></svg>
                        </div>
                        <div>
                            <ul>
                                {
                                    this.props.dateData.map((val)=>{
                                        return (
                                            <li key={randomString()}>
                                                <div>
                                                    <div>
                                                        <p>￥</p>
                                                        <span>{val.parValue}</span>
                                                    </div>
                                                    <p>{val.couponDetailInfo}</p>
                                                </div>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <p>{val.activityName}</p>
                                                            <span>领取日起30天</span>
                                                        </div>
                                                        <div>
                                                            <p>立即领取</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p>详情信息</p>
                                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5054"  width="10" height="10"><path d="M1.269 512c0-281.619 229.089-510.73 510.73-510.73 281.6 0 510.71 229.11 510.71 510.73s-229.11 510.73-510.71 510.73c-281.641 0-510.73-229.11-510.73-510.73zM967.249 512c0-251.023-204.247-455.25-455.25-455.25-250.982 0-455.229 204.227-455.229 455.25 0 251.003 204.247 455.209 455.229 455.209 251.003 0 455.25-204.206 455.25-455.209z" fill="#ccc" p-id="5055"></path><path d="M232.488 399.114c0.025-15.306 12.44-27.704 27.75-27.704 7.641 0 14.561 3.089 19.58 8.085l232.181 232.16 232.202-232.161c5.052-5.21 12.114-8.443 19.932-8.443 15.326 0 27.75 12.424 27.75 27.75 0 7.829-3.242 14.899-8.456 19.945l-251.809 251.768c-5.018 5.019-11.951 8.123-19.61 8.123s-14.591-3.103-19.61-8.123l-251.802-251.761c-5.010-4.983-8.111-11.881-8.11-19.503 0-0.048 0-0.096 0-0.146z" fill="#ccc" p-id="5056"></path></svg>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                                
                            </ul>
                        </div>
                    </AlertDiv>
                </List>
                </Modal>
            </WingBlank>

                </Fragment>
            )
          }
        return(
            <DetailContainer>
            <DetailTop {...this.props}></DetailTop>
            <DetailMain ref={el=>this.scrollDiv=el}>
                {userMessage}
                
           
               
              
                
                <div>
                    <WhiteSpace />
                    <StickyContainer>
                    <Tabs tabs={tabs}
                        initalPage={'t2'}
                        renderTabBar={renderTabBar}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of first tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of second tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of third tab
                        </div>
                    </Tabs>
                    </StickyContainer>
                    <WhiteSpace />
                </div>

             

            </DetailMain>
            

            <DetailBottom></DetailBottom>
        </DetailContainer>
        )
    }

    componentDidMount(){
        this.scrollDiv.addEventListener('scroll', this.props.scrollHandler);
    }
    componentDidUpdate(){
        new Swiper('.swiper-container',{
            pagination:{
                el: '.swiper-pagination',
                type: 'fraction',
            }
            
        })
    }
}
