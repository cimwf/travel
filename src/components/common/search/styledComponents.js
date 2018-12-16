import styled from 'styled-components'

const Search = styled.div`
    width: 100%;
    height: 0.5rem;
    padding: 0.1rem 0.14rem;
    display:flex;
    >div{
        align-items:center;
        display:flex;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius:0.15rem;
        justify-content:space-between;
        align-items:center;
        >div:nth-child(1){
            width: 17%;
            height: 50%;
            display:flex;
            justify-content:center;
            align-items:center;
            border-right:1px solid #ccc;
            font-size:0.13rem;
            color:#00be88;
        }
        >div:nth-child(2){
            flex:1;
            height: 100%;
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding: 0 0.1rem;
            >div{
                display:flex;
                align-items:center;
                input{
                    border:none;
                    font-size:0.13rem;
                    margin-left: 0;
                }
            }
        }
    }
`
const HotSearch = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 0.1rem;
    h3{
        font-weight: normal;
        font-size:0.14rem;
        color:#999;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    ul{
        display:flex;
        flex-wrap:wrap;
        margin:0.1rem 0;
        li{
            padding: 0.05rem 0.15rem;
            color:#666;
            background-color: #f4f6f8;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
            font-size:0.13rem;
        }
    }
`


export {
    Search,
    HotSearch,
}