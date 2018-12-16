import styled from 'styled-components'
import border from 'components/styled/border'

const Location = styled.div`
    width: 100%;
    height: ${window.innerHeight}px;
    display:flex;
    flex-direction:column;
`
const ChooseBox = border({
    component:styled.div`
        width: 100%;
        flex:1;
        overflow:hidden;
        >div{
            background-color: #fff;
            width: 100%;
            height: max-content;
            padding: 0.14rem 0.31rem 0 0;
        }
    `,
    color:'#e8e8e8',
    width:'1px 0 0 0'
})


const Choose = styled.div`
    width: 100%;
    height: max-content;
    background-color: #fff;
    padding-left: 0.14rem;
    h3{
        font-size:0.14rem;
        font-weight: normal;
        color:#666;
    }
    ul{
        width: 100%;
        display:flex;
        flex-wrap:wrap;
        padding: 0.1rem 0;
        li{
            padding: 0.07rem 0.23rem;
            border:1px solid #1cbc76;
            color:#00be88;
            background-color: #f2fbf7;
            border-radius:0.05rem;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
        }
    }
`

const City = styled.div`
    width: 100%;
    height: max-content;
    >div{
        p{
            font-size:0.14rem;
            background-color: #f8f8f8;
            padding:0.05rem 0.1rem;
        }
        ul{
            width: 100%;
            padding-left: 0.1rem;
        }
    }
`

const CityItem = border({
    component:styled.li`
        height: 0.4rem;
        font-size:0.14rem;
        color:#333;
        line-height:0.4rem;
    `,
    color:'#e8e8e8',
    width:'0 0 1px 0'
})


const Letter = styled.ul`
    width: 0.3rem;
    height: max-content;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:fixed;
    right:0;
    z-index:2;
    top:1rem;
    font-size:0.12rem;
    color:#00be88;
    li{
        height: 0.16rem;
        width: 100%;
        text-align: center;
    }
`

export {
    Choose,
    Location,
    ChooseBox,
    City,
    CityItem,
    Letter
}