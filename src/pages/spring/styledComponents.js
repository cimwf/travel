import styled from 'styled-components'
import border from 'components/styled/border'

const SpringContainer = styled.div`
    height: 100%;
`

const SpringAD = styled.div`
    width: 100%;
    padding: 0.1rem;
    background-color: #fff;
    margin:0.1rem 0;
    height: max-content;
    >div:first-child{
        width: 100%;
        height: 0.9rem;
        display:flex;
        margin-bottom: 0.1rem;
        img{
            width: 34.3%;
            margin-right: 0.1rem;
        }
        >div{
            >p{
                height: 0.36rem;
                font-size:0.14rem;
            }
            >div{
                margin-top: 0.2rem;
                width: 100%;
                display:flex;
                justify-content:space-between;
                >p{
                    font-size:0.12rem;
                    color:#f66;
                    em{
                        margin:0 0.03rem;
                        font-size:0.2rem
                    }
                }
                span{
                    font-size:0.12rem;
                    color:#999;
                    display:flex;
                    align-items:flex-end;
                }
            }
        }
    }
`

const SpringBottom = border({
    component:styled.div`
        width: 100%;
        height: 1rem;
        padding-top: 0.1rem;
        >ul{
            width: 100%;
            height: 0.9rem;
            display:flex;
            justify-content:space-between;
            li{
                width: 32%;
                height: 100%;
                display:flex;
                flex-direction:column;
                align-items:center;
                padding-top:0.1rem;
                justify-content:space-around;
                &:nth-child(1){
                    background-color: #fff2e6;
                }
                &:nth-child(2){
                    background-color: #f5f0fb;
                }
                &:nth-child(3){
                    background-color: #ffefec;
                }
                img{
                    width: 80%;
                }
                h3{
                    font-weight: normal;
                }
                p{
                    font-size:0.12rem;
                }
            }
        }
    `,
    color:"#777",
    width:'1px 0 0 0'
})

const SwiperSearch = styled.div`
    position:absolute;
    width: 80%;
    height: 0.4rem;
    background-color: #fff;
    box-shadow:0.01rem 0.02rem 0.03rem #ccc;
    top:-0.2rem;
    left:10%;
    z-index:1;
    border-radius:0.02rem;
    padding: 0 0.15rem;
    display:flex;
    align-items:center;
    >div:nth-child(1){
        width: 20%;
        height: 100%;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:0.12rem;
        color:#666;
    }

    >div:nth-child(3){
        width: 80%;
        display:flex;
        align-items:center;
        justify-content:center;
        input{
            width: 50%;
            border:none;
            font-size:0.12rem;
            margin-left: 0.1rem;
        }
    }
`
const SearchBorder = border({
    component:styled.div`
        height: 0.12rem;
    `,
    color:'#999',
    width:'0 1px 0 0'
})

export {
    SpringContainer,
    SpringAD,
    SpringBottom,
    SwiperSearch,
    SearchBorder
}