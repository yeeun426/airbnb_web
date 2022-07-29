import { useEffect, useState } from "react";  
import host_data from '../data/behost.json';
import '../pages/Behost.css'

const HostSlider = ({id}, e) => {

    const [data, setDetail] = useState([]);
    //data를 배열로 선언

    useEffect(() => {
        // eslint-disable-next-line array-callback-return
        host_data.details.map((item) => {
            if(id === item.id) 
                setDetail(item);
        })
    }, [id])

    return (
        <>
            <div className="img-detail">{data.detail}</div>
            <img className="img-detail-sign" src={data.sign} alt=""/>
            <div className="img-detail-country">{data.country}</div> 
        </>
    )
}
export default HostSlider;
