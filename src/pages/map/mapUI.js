import React from 'react'
import {
    MapHeader,
    MapSearch,
    MapList,
    MapListLeft,
    MapListRight,
    MapNav
} from './styledComponents'
import MapRightList from './views/mapRightList'

const listData = [
{'name':'当季热门', pageid:"905", sign:"75FE4EB348BDA579D2CAB75634B5B034B10CC00E",t:"201811232145" },
{'name':'国内', pageid:"913", sign:"2B482090AC1D179938136CADA2F667FDD638E0D8",t:'201811232219' },
{'name':'日本', pageid:"915", sign:"CC325DA75BCF162C8B258E78ABB934518F6FC2A7",t:'201811232219' },
{'name':'欧洲', pageid:"924", sign:"681F39BBFB6CA6818972056C3383771D629FCD87",t:'201811241112' },
{'name':'中东非', pageid:"2852", sign:"4216C64428B50909C65C4503EE1565274A368DC8",t:'201811241113' },
{'name':'东南亚', pageid:"914", sign:"FAB58D349F18DC8B166C9CE00DAC5202B6287D00",t:'201811241113' },
{'name':'港澳台', pageid:"922", sign:"44932FD2B4A0BFCD0FACBDF08B3355356A460AF8",t:'201811241113' },
{'name':'海岛', pageid:"916", sign:"E0C1B1CDD330A916889D15D948C793119D077E98",t:'201811241110' }
] 

export default (props)=>{
    return (
        <div>
            <MapHeader>
                <div>
                    <svg onClick={props.goback} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8166"  width="20" height="20"><path d="M924.136 473.895H175.849l346.396-346.396c14.561-14.561 14.561-38.149 0-52.709-14.561-14.561-38.149-14.561-52.709 0L59.51 484.815c-14.561 14.561-14.561 38.149 0 52.709L469.536 947.55c7.28 7.28 16.817 10.92 26.355 10.92 9.537 0 19.074-3.64 26.355-10.92 14.561-14.561 14.561-38.149 0-52.709L175.849 548.445h748.287c20.585 0 37.275-16.69 37.275-37.275 0-20.585-16.69-37.275-37.275-37.275z" fill="#00be88" p-id="8167"></path></svg>
                </div>
                <div>
                    目的地
                </div>
                <div>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1957"  width="23" height="23"><path fill='#00be88' d="M745.6 947.2c-144 0-309.12-74.88-441.6-199.68-140.8-133.12-221.44-302.08-221.44-464.64 0-113.92 92.8-206.72 206.72-206.72 113.92 0 206.72 92.8 206.72 206.72 0 63.36-28.8 122.88-78.08 161.92 14.08 84.48 80.64 152.96 164.48 170.24 39.04-51.2 99.2-81.28 163.84-81.28 113.92 0 206.72 92.8 206.72 206.72 0 113.92-92.8 206.08-206.72 206.72h-0.64z m0-51.2h1.28c85.76 0 155.52-69.76 155.52-155.52s-69.76-155.52-155.52-155.52c-53.12 0-102.4 26.88-130.56 71.68-5.12 8.32-14.72 12.8-24.96 11.52-119.04-15.36-214.4-112.64-225.92-232.32-0.64-9.6 3.2-18.56 10.88-23.68 42.88-28.8 68.48-76.8 68.48-128.64 0-85.76-69.76-155.52-155.52-155.52s-155.52 69.76-155.52 155.52c0 148.48 74.88 304 205.44 426.88 123.52 116.48 275.2 185.6 406.4 185.6z" p-id="1958"></path></svg>
                </div>
            </MapHeader>
            <MapSearch>
                <div>
                    <span>北京</span>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11262"  width="15" height="15"><path fill="#00be88" d="M511.784082 561.278333l206.864418-206.865441c6.012947-6.012947 15.763009-6.012947 21.775956 0l50.808176 50.808176c6.012947 6.012947 6.012947 15.763009 0 21.776979l-267.463588 267.463588-2.133593 2.133593c-5.440919 5.440919-14.262842 5.440919-19.703761 0l-1.889023-1.889023-266.85472-266.855744c-6.701632-6.701632-6.375198-17.107633 0.24457-23.727401l48.179302-48.178279c6.859221-6.859221 17.980513-6.859221 24.839735 0L511.784082 561.278333z" p-id="11263"></path></svg>
                </div>
                <div>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2767"  width="15" height="15"><path fill="#888" d="M954.186 859.557l-132.043-132.043c139.81-186.414 93.206-450.499-85.439-582.542-163.111-124.276-396.129-108.741-543.707 38.836-163.111 163.111-163.111 427.198 0 590.309 147.578 147.578 372.827 163.111 543.707 38.836l132.043 132.043c23.301 23.301 62.138 23.301 85.439 0 23.301-15.534 23.301-54.371 0-85.439zM721.169 719.747c-62.138 62.138-147.578 100.974-240.784 100.974s-178.646-38.836-240.784-100.974c-132.043-132.043-132.043-349.525 0-481.568s349.525-132.043 481.568 0 132.043 349.525 0 481.568z" p-id="2768"></path></svg>
                    <input type="text" placeholder="搜你想去的地方" onClick={props.goSearch}/>
                </div>
            </MapSearch>
            <MapList>
                <MapListLeft>
                    <ul>
                        {
                            listData.map((val,index)=>{
                                return (
                                    <MapNav {...props} key={index} index={index} onTouchStart={(e)=>{
                                        props.listLeftClick(index,val.pageid,val.sign,e,val.t)
                                    }}>{val.name}</MapNav>
                                )
                            })
                        }
                        {/* <MapNav {...props} onTouchStart={props.listLeftClick} index="0" pageid:"905" sign:"75FE4EB348BDA579D2CAB75634B5B034B10CC00E">当季热门</MapNav>
                        <MapNav {...props} onTouchStart={props.listLeftClick} index="1" pageid:"913" sign:"A8309ACEE3B2ABAB6EEBA57349899045FA58754B">国内</MapNav>
                        <MapNav {...props} onTouchStart={props.listLeftClick} index="2" pageid:"915" sign:"CC325DA75BCF162C8B258E78ABB934518F6FC2A7">日本</MapNav>
                        <MapNav {...props} onTouchStart={props.listLeftClick} index="3" pageid:"924" sign:"1085457ED9D6823CAE987AD3412785F32607786D">欧洲</MapNav>
                        <MapNav {...props} onTouchStart={props.listLeftClick} index="4" pageid:"2852" sign:"CCB21F59D9314B4AFFAEDFA3A107E3BEC80B25BF">中东非</MapNav>
                        <MapNav {...props} onTouchStart={props.listLeftClick} index="5" pageid:"914" sign:"D639C4C527CE222B5B59B50E7F9AA893602783CC">东南亚</MapNav>
                        <MapNav {...props} onTouchStart={props.listLeftClick} index="6" pageid:"922" sign:"ADAEB7C2BA7D7CC91850D257D7120A29232E100A">港澳台</MapNav>
                        <MapNav {...props} onTouchStart={props.listLeftClick} index="7" pageid:"916" sign:"6EF34395654CA5B56ACA2C79D4063D5F19E22560">海岛</MapNav> */}
                    </ul>
                </MapListLeft>
                <MapListRight>
                    <MapRightList {...props.mapRightData}></MapRightList>
                </MapListRight>
            </MapList>
        </div>
    )
}

