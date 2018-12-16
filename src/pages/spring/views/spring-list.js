import React from 'react'
import randomString from 'random-string'
export default (props)=>{
    return (
        <div className={props.className && "spring-list"}>
            <div className="list-img">
                <img src={props.banners && props.banners[0].imgurl} alt=""/>
            </div>
            <ul>
                {
                    props.products && props.products.map((value,index)=>{
                        return (
                            <li key={randomString()} onClick={()=>{
                                props.goDetail(value.productId)
                            }}>
                                <div>
                                    <img src={value.imgurl} alt=""/>
                                    <i>{value.productTypeName}</i>
                                    <p>{value.cityName} {value.cityType}</p>
                                </div>
                                <div>
                                    <p>{value.productName}</p>
                                    <p>班期：{
                                        value.scheduleDateList.map((val)=>{
                                            return (<span key={randomString()}>{val}、</span>)
                                        })
                                    }</p>
                                    <p>￥<span>{value.price}</span>起</p>
                                </div>
                            </li>
                        )
                    })
                }
                
            </ul>
        </div>
    )
}