import styled from 'styled-components'
import border from 'components/styled/border'

const ListContainer = styled.div`
    width: 100%;
    height: ${window.innerHeight}px;
    position:relative;
    display:flex;
    flex-direction:column;
`
const ListMain = styled.div`
    width: 100%;
    flex:1;
    background-color: #fff;
    overflow-y:scroll;
    padding-bottom: 0.48rem;
`

const ListSearch = styled.div`
    width: 100%;
    height: 0.5rem;
    padding: 0.1rem 0.14rem;
    display:flex;
    background-color: #f1f1f1;
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
const ListNav = border({
    component:styled.div`
        width: 100%;
        height: 0.42rem;
        position:relative;
        >div:nth-child(1){
            width: 100%;
            height: 100%;
            overflow-y:scroll;
            ul{
                width: max-content;
                display:flex;
                height: 100%;
                
            }
        }
        >div:nth-child(2){
            position:absolute;
            width: 0.42rem;
            height: 100%;
            display:flex;
            align-items:center;
            justify-content:center;
            right:0;
            top:0;
            background-color: #fff;
            >div{
                height: 70%;
                width: 100%;
                border-left:1px solid #e8e8e8;
                margin-top: 15%;
                display:flex;
                justify-content:center;
                align-items:center;
            }
        }
    `,
    color:'#e8e8e8',
    width:'1px 0'
})

const ListItem = styled.li`
    height: 100%;
    margin: 0 0.14rem;
    display:flex;
    align-items:center;
    color:${props=>props.index === props.i?'#00be88':''};
`

const ListDate = border({
    component:styled.div`
        width: 100%;
        height: 0.46rem;
        position:relative;
        >div:nth-child(1){
            width: 100%;
            height: 100%;
            overflow-x:scroll;
            ul{
                width: max-content;
                height: 100%;
                display:flex;
                padding-right: 0.46rem;
                li{
                    padding: 0 0.14rem;
                    height: 100%;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    p{
                        color:#333;
                    }
                    span{
                        color:#f84;
                    }
                }
            }            
        }
        >div:nth-child(2){
            width: 0.46rem;
            height: 100%;
            color:#00be88;
            position:absolute;
            top:0;
            right:0;
            background-color: #fff;
            display:flex;
            justify-content:center;
            align-items:center;
            div{
                height: 70%;
                width: 100%;
                border-left: 0.02rem solid #e8e8e8;   
                padding: 0 0.08rem;
            }
        }
    `,
    color:'#e8e8e8',
    width:'0 0 1px 0'
})



export {
    ListContainer,
    ListMain,
    ListSearch,
    ListNav,
    ListDate,
    ListItem
}