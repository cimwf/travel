import styled from 'styled-components'

const ServiceContainer = styled.div`
    top:0;
    position:absolute;
    width: 100%;
    height: ${window.innerHeight }px;
    background-color: rgba(0,0,0,0.6);
    z-index:1001;
    display:${props=>props.bstop?'':'none'};
    ul{
        position:absolute;
        top:50%;
        width: 100%;
        display:flex;
        justify-content:space-around;
        li{
            width: 0.6rem;
            color:#fff;
            font-size:0.12rem;
            display:flex;
            flex-direction:column;
            align-items:center;
            div{
                width: 100%;
                height: 0.6rem;
                border-radius:50%;
                background-color: #00be88;
                display:flex;
                justify-content:center;
                align-items:center;
            }
            span{
                display:inline-block;
                margin-top: 0.1rem;
            }
        }
    }
    >div{
        width: 100%;
        position:absolute;
        bottom:0.1rem;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`

export {
    ServiceContainer
}