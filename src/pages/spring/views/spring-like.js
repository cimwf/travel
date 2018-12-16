import React from 'react'
import './spring.scss'
import randomString from 'random-string'
export default (props)=>{
    return (
        <div className='springLike'>
            <h3>-<span>猜你喜欢</span>-</h3>
            <ul>
                {
                    props.products && props.products.map((val)=>{
                        return (
                            <li key={randomString()}>
                                <div>
                                    <i>{val.productTypeName}</i>
                                    <img src={val.imgurl} alt=""/>
                                </div>
                                <div>
                                    <p>{val.productName}</p>
                                    <div>
                                        <p>￥<span>{val.price}</span>起</p>
                                        <p>{val.cityName} {val.cityType}</p>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}