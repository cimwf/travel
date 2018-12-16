import React from 'react'
import './map.scss'
import randomString from 'random-string'

export default (props)=>{

    const fn = function(data){
        if(data && data.length > 0){
            return (
                <div>
                <h3>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1957" width="20" height="20"><path d="M215.13529 423.86673H107.982852c-21.490453 0-38.881542 17.696034-38.881543 39.518039v418.654009c0 21.809725 17.391089 39.517015 38.881543 39.517015h107.152438c21.490453 0 38.885636-17.708314 38.885636-39.517015v-418.655032c0.001023-21.820981-17.394159-39.517015-38.885636-39.517016zM198.719412 867.023806h-74.316589V478.385415h74.316589v388.638391z m739.901547-428.694689c-18.718317-30.980595-45.911656-43.50177-78.809927-44.878117-1.708921-0.254803-199.043289-1.077541-199.043289-1.077541 13.065574-38.452777 16.664541-84.294848 16.664542-127.371946 0-27.960819-3.081175-55.141878-8.760524-81.331353l-0.491187 0.056281c-10.284227-45.89733-50.15633-80.125899-97.860819-80.125898-55.529711 0-92.547813 47.456848-92.547812 104.569614 0 3.220345-0.25992 6.296403 0 9.374508-2.905166 106.810654-88.453564 192.666044-190.231599 204.449415l-0.77669 499.347842h9.934257c-0.01535-0.013303 0.104377-0.026606 0.459464-0.026606 0.37146 0 0.488117 0.014326 0.475838 0.026606l492.727051-0.026606h0.314155c18.596544 0 29.103852-4.807493 46.038546-15.852036 16.149818-10.620895 28.361955-25.139563 36.319183-41.545208 2.204202-3.304256 78.69634-342.157777 80.649832-362.265744 1.529843-21.437242-3.189645-43.614333-15.061021-63.323211z m-40.017412 58.007135c-5.0142 30.699186-66.970274 306.130236-77.369112 347.617116-3.838422 6.550183-9.010211 12.06785-15.047718 16.037254-10.409071 6.791683-11.091616 6.791683-15.827477 6.791684l-448.206068 0.028652 0.623194-400.901692c108.342544-33.422204 187.159634-132.264373 190.279694-246.90332l0.081864-2.992147-0.163729-1.983168 0.023537-1.163499 0.081864-4.693905c0-24.103978 11.653411-50.037626 37.241183-50.037627 20.896936 0 38.931684 15.356756 43.861973 37.362956l2.971681 12.663414c3.307326 18.85851 4.976338 37.913495 4.976338 56.843636 0 46.707788-4.51585 82.708723-13.802354 110.059652l-24.302499 71.532173 76.507488 0.313132c73.848938 0.311085 186.156794 0.822738 196.984397 1.035586 19.34151 0.808412 26.966165 7.315616 33.559327 18.234293 6.726192 11.169387 7.874341 22.314215 7.526417 30.15581zM296.902572 921.400251c-0.078795 0.026606-0.074701 0.041956 0 0.041955 0.054235 0 0.144286-0.01535 0.260943-0.015349 0.127913 0.01535 0.225127 0.01535 0.280386 0.015349 0.085958 0 0.093121-0.01535 0-0.041955 0.105401-0.028653 0.184195-0.044002 0.195452-0.058329h-0.936326c0.007163 0.014326 0.090051 0.029676 0.199545 0.058329z" fill="#00be88" p-id="1958"></path></svg>
                    <p>推荐目的地</p>
                </h3>
                <ul>
                    {
                        data[0].data.keywords.map((val)=>{
                            return (
                                <li key={randomString()}>{val.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
            )
        }
        return 
    }
    return (
        <div className="mapRightLeft">
            <div>
                <ul>
                    {
                        props.data && props.data.banners.map((val)=>{
                            return (
                                <li key={randomString()}>
                                    <img src={val.imgurl} alt=""/>
                                    <div>
                                        <p>{val.title}</p>
                                        <p>{val.subtitle}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            {
                fn(props.positions)
            }
            
        </div>
    )
}