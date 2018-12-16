import styled from 'styled-components'
import border from 'components/styled/border'

const MapHeader = border({
    component:styled.div`
        width: 100%;
        height: 0.42rem;
        padding: 0 0.15rem;
        background-color: #fff;
        display:flex;
        >div:nth-child(1),>div:nth-child(3){
            width: 17%;
            display:flex;
            height: 100%;
            align-items:center;
        }
        >div:nth-child(3){
            justify-content:flex-end;
        }
        >div:nth-child(2){
            width: 66%;
            height: 100%;
            display:flex;
            justify-content:center;
            align-items:center;
        }
    `,
    color:'#999',
    width:'0 0 1px 0'
})

const MapSearch = styled.div`
    width: 100%;
    height: 0.5rem;
    background-color: #fff;
    padding: 0.1rem;
    display:flex;
    >div:nth-child(1){
        width: 20%;
        display:flex;
        align-items:center;
        font-size:0.12rem;
        color:#666;
        span{
            margin-right: 0.05rem;
        }
    }
    >div:nth-child(2){
        width: 80%;
        display:flex;
        align-items:center;
        border-radius:0.2rem;
        background-color: #f2f3f7;
        padding: 0 0.1rem;
        input{
            height: 100%;
            border:none;
            background-color: #f2f3f7;
            margin-left: 0.1rem;
            font-size:0.12rem;
            color:#666;
        }
    }
`

const MapList = styled.div`
    width: 100%;
    margin-top: 0.1rem;
    display:flex;
`
const MapListLeft = styled.div`
    width: 20%;
    height: max-content;
    background-color: #fff;
    margin-right: 0.1rem;
    ul{
        width: 100%;
    }
`
const MapNav = styled.li`
    width: 100%;
    height: 0.54rem;
    text-align: center;
    line-height:0.54rem;
    color:${props => {
        return props.index === props.listLeft ? '#00be88' : '';
    }};
    background-color: ${props => props.index === props.listLeft ? '#f6f7fb' : ''};
`
const MapListRight = styled.div`
    flex:1;
    padding-right: 0.1rem;
`




export {
    MapHeader,
    MapSearch,
    MapList,
    MapListLeft,
    MapListRight,
    MapNav
}