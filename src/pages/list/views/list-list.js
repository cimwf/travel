import React from 'react'
import randomString from 'random-string'
import './list.scss'
export default (props)=>{
    return (
        <div className= "spring-list">
            <ul>
                {
                    props.listData.search && props.listData.search.data.map((value,index)=>{
                        return (
                            <li key={randomString()} onClick={()=>{
                                props.goDetail(value.productId)
                            }}>
                                <div>
                                    <img src={value.picture} alt=""/>
                                    <i>{value.attributeName}</i>
                                    <p>{value.departureCitys[0]} {value.cityType}</p>
                                </div>
                                <div>
                                    <p>{value.name}</p>
                                    <p>班期：{
                                        value.schedule.months.map((val)=>{
                                            return (<span key={randomString()}>{val}、</span>)
                                        })
                                    }</p>
                                    <p>￥<span>{value.schedule.minPrice}</span>起</p>
                                </div>
                            </li>
                        )
                    })
                }
                
            </ul>
        </div>
    )
}