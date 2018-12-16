import React from 'react'
import SwiperContainer from './views/swiper'
import SpringNav from './views/spring-nav'
import SpringList from './views/spring-list'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import SpringLike from './views/spring-like'
import './views/spring.scss'

import {
  SpringContainer,
  SpringAD,
  SpringBottom,
  SwiperSearch,
  SearchBorder
} from './styledComponents'
export default (props)=>{
  function renderTabBar(props) {
    return (<Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
  }
  const tabs = [
    { title: '品质处境' },
    { title: '国内省心' },
  ];
    return (
      <SpringContainer id="springScroll">
        <SwiperContainer></SwiperContainer>
        <div className={props.searchSwitch ? 'absoluteDiv' : 'fixedDiv'}>
          <SwiperSearch>
            <div onClick={props.goLocation}>
              <p>{props.currentCity || '北京'}</p>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1953"  width="10" height="10"><path d="M882.787 345.351l-370.805 370.727-370.768-370.727h741.573z" fill="#666666" p-id="1954"></path></svg>
            </div>
            <SearchBorder></SearchBorder>
            <div>
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2767"  width="15" height="15"><path fill="#999" d="M954.186 859.557l-132.043-132.043c139.81-186.414 93.206-450.499-85.439-582.542-163.111-124.276-396.129-108.741-543.707 38.836-163.111 163.111-163.111 427.198 0 590.309 147.578 147.578 372.827 163.111 543.707 38.836l132.043 132.043c23.301 23.301 62.138 23.301 85.439 0 23.301-15.534 23.301-54.371 0-85.439zM721.169 719.747c-62.138 62.138-147.578 100.974-240.784 100.974s-178.646-38.836-240.784-100.974c-132.043-132.043-132.043-349.525 0-481.568s349.525-132.043 481.568 0 132.043 349.525 0 481.568z" p-id="2768"></path></svg>
              <input type="text" placeholder="搜你想去的地方" onClick={props.goSearch}/>
            </div>
          </SwiperSearch>
          </div>
        <SpringNav>
        </SpringNav>
        <SpringAD>
          <div>
            <img src="http://media.china-sss.com/pics/gallery/201810/c41a9aef-b530-433e-a4b6-b8be847e09ad_201810191915.jpg" alt=""/>
            <div>
              <p>【A惠游日本】东京+大阪+京都+富士山+箱根6日5晚跟团游</p>
              <div>
                <p>￥<em>3399</em>起</p>
                <span>天津 出发</span>
              </div>
            </div>
          </div>
          <SpringBottom>
            <ul>
              <li>
                <h3>新人专享礼</h3>
                <p>666元大礼包</p>
                <img src="http://media.china-sss.com/img/M00/00/0C/wKjFbVp4JcWAY0tsAAAgFUy47Eo190.png" alt=""/>
              </li>
              <li>
                <h3>错峰出游</h3>
                <p>游世界</p>
                <img src="http://media.china-sss.com/img/M00/04/28/wKjFbFu9r2iAW5lYAAI_SoFRUBg906.png" alt=""/>
              </li>
              <li>
                <h3>爸妈去旅行</h3>
                <p>别样的假期</p>
                <img src="http://media.china-sss.com/img/M00/04/28/wKjFbVu9r2iAA9xCAAJu19zl0n0311.png" alt=""/>
              </li>
            </ul>
          </SpringBottom>
        </SpringAD>
          <div>
              <WhiteSpace />
              <StickyContainer>
                <Tabs tabs={tabs}
                  initalPage={'t2'}
                  renderTabBar={renderTabBar}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                  <SpringList goDetail={props.goDetail} {...props.data1} className='list1'></SpringList>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                  <SpringList goDetail={props.goDetail} {...props.data2} className='list2'></SpringList>
                  </div>
                </Tabs>
              </StickyContainer>
              <WhiteSpace />
            </div>
            <SpringLike {...props.likeData}></SpringLike>
      </SpringContainer>
    
    )
}

