import styled from 'styled-components'

const DetailBottomContainer = styled.div`
    position:fixed;
    bottom:0;
    width: 100%;
    height: 0.44rem;
    background-color: #fff;
    display:flex;
    >div{
        width: 20%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        font-size:0.12rem;
        height: 100%;
        color:#666;
    }
    >div:nth-child(3){
        width: 60%;
        color:#fff;
        background-color: #f84;
        font-size:0.16rem;
    }
`

const DetailTopContainer = styled.div`
    width: 100%;
    height: 0.44rem;
    position:fixed;
    top:0;
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 0.14rem;
    transition:all 1s;
    background-color: ${props=>props.topSwitch?'':'#fff'};
    z-index:2;
    >div:nth-child(1){
        width: 20%;
        div{
            width: 0.3rem;
            height: 0.3rem;
            border-radius:50%;
            background-color: ${props=>props.topSwitch? 'rgba(0,0,0,0.5)' : ''};
            display:flex;
            justify-content:center;
            align-items:center;
            fill:${props=>props.topSwitch?'#fff':'#00be88'};
        }
    }
    >div:nth-child(2){
        flex:1;
        height: 100%;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:0.18rem;
        color:#333;
        opacity:${props=>props.topSwitch? 0 : 1};
    }
    >div:nth-child(3){
        width: 20%;
        display:flex;
        align-items:center;
        height: 100%;
        div{
            margin-left: 0.05rem;
            width: 0.3rem;
            height: 0.3rem;
            border-radius:50%;
            background-color: ${props=>props.topSwitch? 'rgba(0,0,0,0.5)' : ''};
            display:flex;
            justify-content:center;
            align-items:center;
            fill:${props=>props.topSwitch?'#fff':'#00be88'};
        }
    }
`


export{
    DetailBottomContainer,
    DetailTopContainer
}