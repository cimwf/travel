import styled from 'styled-components'

const HeaderContainer = styled.div`
    width: 100%;
    background-color: #fff;
    height: 0.42rem;
    padding: 0 0.15rem;
    display:flex;
    >div:nth-child(1),>div:nth-child(3){
        width: 20%;
        display:flex;
        align-items:center;
    }
    >div:nth-child(2){
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:0.18rem;
        color:#333;
    }
`

export {
    HeaderContainer
}