import styled from 'styled-components'
import border from 'components/styled/border'

const MineContainer = styled.div`
    width: 100%;
    height: 100%;
`

const MineHeader = styled.div`
    width: 100%;
    height: 1.36rem;
    background:url(http://media.china-sss.com/chunqiu/m/images/user/top-bg.png);
    background-size:cover;
    h3{
        display:flex;
        justify-content:flex-end;
        align-items:center;
        height: 0.3rem;
        padding: 0 0.1rem;
    }
    >div{
        width: 100%;
        height: 0.7rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        font-size:0.13rem;
        color:#fff;
        >div{
            width: 1.46rem;
            height: 0.34rem;
            background-color: #f84;
            text-align: center;
            line-height:0.34rem;
            border-radius:0.17rem;
            margin-top:0.15rem;
        }
    }
`

const MineNav = styled.div`
    width: 100%;
    >div:nth-child(1){
        width: 100%;
        height: 0.44rem;
        padding: 0.14rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        background-color: #fff;
        >div{
            display:flex;
            align-items:center;
            font-size:0.12rem;
            color:#333;
            span{
                margin-left: 0.05rem;
            }
        }
    }
`

const MineNavList = border({
    component:styled.div`
        width: 100%;
        height: 0.7rem;
        background-color: #fff;
        ul{
            display:flex;
            width: 100%;
            height: 100%;
            justify-content:space-around;
            align-items:center;
            li{
                display:flex;
                flex-direction:column;
                align-items:center;
                font-size:0.12rem;
                color:#333;
                p{
                    width: 0.23rem;
                    height: 0.23rem;
                    background:url(http://media.china-sss.com/chunqiu/m/images/user/user-icon.png);
                    background-size:cover;
                }
                &:nth-child(2){
                    p{
                        background-position:0 -0.23rem;
                    }
                }
                &:nth-child(3){
                    p{
                        background-position:0 -0.46rem;
                    }
                }
                &:nth-child(4){
                    p{
                        background-position:0 -0.69rem;
                    }
                }
            }

        }
    `,
    color:'#e8e8e8',
    width:'1px 0',
})


const MineMain = styled.div`
    width: 100%;
    padding: 0 0 0 0.14rem;
    background-color: #fff;
    margin-bottom: 0.1rem;
`
const MineList = styled.div`
    width: 100%;
    display:flex;
    height: 0.44rem;
    align-items:center;
    p{
        width: 0.24rem;
        height: 100%;
        display:flex;
        align-items:center;
    }
`
const BorderDiv = border({
    component:styled.div`
        flex:1;
        height: 100%;
        display:flex;
        align-items:center;
        font-size:0.12rem;
        justify-content:space-between;
        padding-right: 0.14rem;
        color:#333;
    `,
    color:'#e8e8e8',
    width:'0 0 1px 0'
})

export {
    MineContainer,
    MineHeader,
    MineNav,
    MineNavList,
    MineMain,
    MineList,
    BorderDiv
}