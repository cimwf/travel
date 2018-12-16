import styled from 'styled-components'

const ListBottomContainer = styled.div`
    width: 100%;
    height: 0.48rem;
    background-color: rgba(51,64,80,.95);
    position:absolute;
    bottom:0;
    ul{
        width: 100%;
        height: 100%;
        display:flex;
        li{
            flex:1;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            color:#fff;
            fill:#fff;
            font-size:0.12rem;
        }
    }
`

export {
    ListBottomContainer
}