import React from 'react'
import {
    FindContainer,
    FindHeader,
    FindSearch
} from './styledComponents'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import FindTag from './views/findTag'
export default (props)=>{
    function renderTabBar(props) {
        return (<Sticky>
          {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
        </Sticky>);
      }
      const tabs = [
        { title: '最新' },
        { title: '手绘攻略' },
        { title: '热门话题' },
        { title: '达人游记' }
      ];
    return (
        <FindContainer>
            <FindHeader>
                <div>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8166"  width="20" height="20"><path d="M924.136 473.895H175.849l346.396-346.396c14.561-14.561 14.561-38.149 0-52.709-14.561-14.561-38.149-14.561-52.709 0L59.51 484.815c-14.561 14.561-14.561 38.149 0 52.709L469.536 947.55c7.28 7.28 16.817 10.92 26.355 10.92 9.537 0 19.074-3.64 26.355-10.92 14.561-14.561 14.561-38.149 0-52.709L175.849 548.445h748.287c20.585 0 37.275-16.69 37.275-37.275 0-20.585-16.69-37.275-37.275-37.275z" fill="#00be88" p-id="8167"></path></svg>
                </div>
                <div>
                    发现
                </div>
                <div></div>
            </FindHeader>
            <FindSearch>
                <div>
                    <div>
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2767"  width="15" height="15"><path fill="#bbb" d="M954.186 859.557l-132.043-132.043c139.81-186.414 93.206-450.499-85.439-582.542-163.111-124.276-396.129-108.741-543.707 38.836-163.111 163.111-163.111 427.198 0 590.309 147.578 147.578 372.827 163.111 543.707 38.836l132.043 132.043c23.301 23.301 62.138 23.301 85.439 0 23.301-15.534 23.301-54.371 0-85.439zM721.169 719.747c-62.138 62.138-147.578 100.974-240.784 100.974s-178.646-38.836-240.784-100.974c-132.043-132.043-132.043-349.525 0-481.568s349.525-132.043 481.568 0 132.043 349.525 0 481.568z" p-id="2768"></path></svg>
                        <input type="text" placeholder="按关键字搜索一下" onClick={props.goSearch}/>
                    </div>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2681"  width="10" height="10"><path fill="#bbb" d="M870.4 148.48C773.12 51.2 650.24 0 512 0S250.88 51.2 148.48 148.48C51.2 250.88 0 368.64 0 512s51.2 261.12 148.48 363.52c102.4 102.4 220.16 148.48 363.52 148.48s261.12-51.2 363.52-148.48c102.4-102.4 148.48-220.16 148.48-363.52S972.8 250.88 870.4 148.48zM768 691.2l-66.56 66.56-179.2-179.2-179.2 179.2-66.56-66.56L460.8 512 276.48 332.8l66.56-66.56 179.2 179.2 179.2-179.2L768 332.8 588.8 512 768 691.2z" p-id="2682"></path></svg>
                </div>
            </FindSearch>


            <div>
                <WhiteSpace />
                <StickyContainer>
                <Tabs tabs={tabs}
                    renderTabBar={renderTabBar}
                >
                    <div>
                        <FindTag articleType=""></FindTag>
                    </div>
                    <div>
                        <FindTag articleType="1"></FindTag>
                    </div>
                    <div>
                        <FindTag articleType="2"></FindTag>
                    </div>
                    <div>
                        <FindTag articleType="3"></FindTag>
                    </div>

                </Tabs>
                </StickyContainer>
                <WhiteSpace />
            </div>
        </FindContainer>
    )
}