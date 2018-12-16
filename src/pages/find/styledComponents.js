import styled from 'styled-components'

const FindContainer = styled.div`
    width: 100%;
`
const FindHeader = styled.div`
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

const FindSearch = styled.div`
    width: 100%;
    height: 0.5rem;
    padding: 0.1rem 0.14rem;
    >div{
        display:flex;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius:0.15rem;
        padding: 0 0.1rem;
        justify-content:space-between;
        align-items:center;
        >div{
            height: 100%;
            display:flex;
            align-items:center;
            input{
                border:none;
                font-size:0.12rem;
                margin-left: 0.1rem;
            }
        }
    }
`

export {
    FindContainer,
    FindHeader,
    FindSearch
}