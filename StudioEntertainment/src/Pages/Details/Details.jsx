import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import { FaRegClock } from "react-icons/fa";

const Details = () => {
    const [data, setData] = useState({});
    const {title} = useParams();
    useEffect(() => {
        axios.get("https://run.mocky.io/v3/2cc0b36b-7d60-4781-bb39-65986be979cc")
            .then(
                res => {
                    setData(res.data.find(item => item.title === title))
                }
            )
            .catch(err => console.log(err))


    }, []);
    return (
        <div>
            <img src={data.posterUrl} alt=""/>
            <div>
                <h1>{data.title}</h1>
                <div className="genres">
                    {
                        data.genres?.map(item => (
                            <span key={item}>{item}</span>
                        ))
                    }

                </div>
                <p>{data.details?.description}</p>
                <div>
                    <span><FaRegClock /><p></p></span>
                    <span><p></p></span>

                </div>
                <div>
                    <span><p></p><p></p></span>
                    <span><p></p><p></p></span>
                    <span><p></p><p></p></span>
                    <span><p></p><p></p></span>
                </div>

            </div>
        </div>
    )
}
export default React.memo(Details);