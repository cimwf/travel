import styled from 'styled-components'
import border from 'components/styled/border'
import photo from 'images/photo.png'

const DetailContainer = styled.div`
    width: 100%;
    height: ${window.innerHeight}px;
`

const DetailMain = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 0.44rem;
    overflow-y:scroll;
`
const DetailSwiper = styled.div`
    width: 100%;
    height: 2.05rem;
    position:relative;
    .swiper-container{
        height: 100%;
        .swiper-wrapper{
            height: 100%;
            .swiper-slide{
                height: 100%;
            }
        }
    }
    .swiper-container:after{
        background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.7));
        z-index:10;
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        height: 0.3rem;
    }
    .swiper-pagination-fraction{
        bottom:0.05rem;
        padding-right: 0.1rem;
        color:#fff;
    }
    .swiper-pagination{
        text-align: right;
    }
    .swiper-pagination-fraction:before{
        /* http://media.china-sss.com/pics/gallery/201507/3279412d-9250-49f1-9360-0d36ab3d9a7e_201507161336_300_210.jpg */
        /* content: url('../../assets/images/find.png'); */
        content:'';
        background:url(${photo});
        width: 0.18rem;
        height: 0.18rem;
        background-size: cover;
        font-size:0.12rem;
        display: inline-block;
        margin-right: 0.05rem;
        margin-bottom: -.05rem;
    }
    .swiper-pagination-fraction:after {
        content: '张';
    }
    img{
        width: 100%;
        height: 100%;
    }
    >div:nth-child(2){
        position:absolute;
        bottom:0;
        z-index:1;
        height: 0.28rem;
        color:#fff;
        font-size:0.14rem;
        width: 100%;
        p{
            padding-left: 0.14rem;
            padding-right: 0.93rem;
            line-height:0.28rem;
            height: 100%;
        }
        div{
            position:absolute;
            bottom:0;
            z-index:-1;
            width: 100%;
            /* box-shadow:0 -0.05rem 0.3rem 0.07rem black;  */
        }
    }
`

const DetailDetail = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 0.14rem;
    color:#333;
    h3{
        width: 100%;
        height: ${props=>props.arrows?'0.36rem':''};
        overflow:hidden;
        font-weight: normal;
        font-size:0.16rem;
        line-height: 0.18rem;
        position:relative;
        svg{
            transition:all 0.5s;
            position:absolute;
            bottom:0.02rem;
            right:0.05rem;
            width: 0.26rem;
            height: 0.16rem;
            background-color: #fff;
            transform:${props=>props.arrows?'rotate(180deg)':''};
        }
    }
    >div:nth-child(2){
        width: 100%;
        display:flex;
        >div:nth-child(1){
            display:flex;
            align-items:center;
            font-size:0.16rem;
            color:#666;
            p{
                font-size:0.14rem;
                color:#f66;
                margin-right:0.05rem;
                span{
                    font-size:0.26rem;
                    font-weight: bold;
                }
            }
        }
        >div:nth-child(2){
            margin-left: 0.1rem;
            display:flex;
            align-items:center;
            >div{
                display:flex;
                align-items:center;
                font-size:0.12rem;
                margin-left: 0.1rem;
                border:1px solid #f84;
                color:#f84;
                height: 0.2rem;
                div{
                    display:flex;
                    align-items:center;
                    background-color: #f84;
                    height: 100%;
                }
            }
            span{
                display:inline-block;
                margin:0.02rem 0.04rem;
            }
        }

    }
    >div:nth-child(3){
        display:flex;
        >div:nth-child(1){
            width: 20%;
            p{
                display:inline-block;
                font-size:0.12rem;
                background-color: rgb(0, 190, 136);
                color:#fff;
                padding: 0 0.04rem;
                margin:0 0.05rem 0.05rem 0;
            }
        }
        >div:nth-child(2){
            flex:1;
            height: 0.38rem;
            color:#666;
            overflow:hidden;
            font-size:0.13rem;
            position: relative;
            svg{
                position:absolute;
                bottom:0.02rem;
                right:0.02rem;
                background-color: #fff;
            }
        }
    }

`

const Favorable = border({
    component:styled.div`
        width: 100%;
        height: 0.4rem;
        background-color: #fff7f7;
        color:#f77;
        padding: 0 0.14rem;
        line-height: 0.4rem;
        font-size:0.14rem;
    `,
    color:'#e8e8e8',
    width:'1px 0'
})

const Coupon = border({
    component:styled.div`
        width: 100%;
        height: 0.74rem;
        padding: 0.14rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        background-color: #fff;
        >div:nth-child(1){
            width: 0.4rem;
            font-size:0.14rem;
            color:#f66d95;
        }
        >div:nth-child(2){
            flex:1;
            ul{
                display:flex;
                flex-wrap:wrap;
                height: 100%;
                li{
                    height: 100%;
                    padding: 0 0.1rem;
                    font-size:0.12rem;
                    color:#fff;
                    background-color: #f66d95;
                    margin-right: 0.1rem;
                    margin-bottom: 0.05rem;
                }
            }
        }
        >div:nth-child(3){
            width: 0.4rem;
            font-size:0.14rem;
            color:#f66d95;
            display:flex;
            justify-content:flex-end;
        }
    `,   
    color:'#e8e8e8',
    width:'1px 0 1px 0'
})



const Recommend = styled.div`
    width: 100%;
    padding: 0.14rem;
    background-color: #fff;
`

const DetailDate = styled.div`
    width: 100%;
    padding: 0 0.14rem;
    height: 0.4rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color: #fff;
    margin:0.1rem 0;
    >div:nth-child(1){
        display:flex;
    }
    >div:nth-child(2){
        display:flex;
        color:#00be88;
    }
`

const AlertDiv = styled.div`
    width: 100%;
    height: 3.67rem;
    background-color: #fff;
    >div:nth-child(1){
        width: 100%;
        height: 0.4rem;
        padding: 0 0.14rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    >div:nth-child(2){
        width: 100%;
        height: 100%;
        background-color: #f2f4f6;
        padding: 0.14rem;
        ul{
            width: 100%;
            height: max-content;
            li{
                width: 100%;
                height: 1rem;
                background-color: #fff;
                display:flex;
                margin-bottom: 0.1rem;
                >div:nth-child(1){
                    width: 31.2%;
                    height: 100%;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    background-color: #fd6274;
                    color:#fff;
                    justify-content:center;
                    >div{
                        display:flex;
                        justify-content:center;
                        align-items:flex-end;
                        P{
                            font-size:0.2rem;
                        }
                        span{
                            font-size:0.4rem;
                            display:flex;
                            align-items:flex-end;
                            line-height: 0.4rem;
                        }
                    }
                    p{
                        font-size:0.14rem;
                        margin-top: 0.1rem;
                    }
                }
                >div:nth-child(2){
                    display:flex;
                    flex-direction:column;
                    flex:1;
                    height: 100%;
                    padding: 0.1rem;
                    >div:nth-child(1){
                        width: 100%;
                        height: 77.5%;
                        display:flex;
                        justify-content:space-between;
                        >div:nth-child(1){
                            font-size:0.13rem;
                            color:#333;
                            display:flex;
                            align-items:flex-start;
                            flex-direction:column;
                            span{
                                color:#aaa;
                                font-size:0.12rem
                            }
                        }
                        >div:nth-child(2){
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            p{
                                background-color: #f66;
                                font-size:0.12rem;
                                color:#fff;
                                padding: 0.03rem 0.07rem;
                                border-radius:0.12rem;
                            }
                        }
                    }
                    >div:nth-child(2){
                        width: 100%;
                        flex:1;
                        display:flex;
                        justify-content:space-between;
                        font-size:0.12rem;
                        align-items:center;
                    }
                }
            }
        }
    }
`


export {
    DetailContainer,
    DetailMain,
    DetailSwiper,
    DetailDetail,
    Favorable,
    Coupon,
    Recommend,
    DetailDate,
    AlertDiv
}