import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {FaRegClock} from "react-icons/fa";
import {CiCalendar} from "react-icons/ci";
import './Details.css'


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
        <div className="details">
            <div className="details-poster">
            <img src={data.posterUrl} alt=""/>
            </div>
            <div className="details-content">
                <h1>{data.title}</h1>
                <div className="genres-container" >
                    {
                        data.genres?.map(item => (
                            <span className="genres" key={item}>{item}</span>
                        ))
                    }

                </div>
                <p className="desc">{data.details?.description}</p>
                <div className="date-info">
                    <span className="datee"><FaRegClock  className="icon"/>Release Date<p>{data.details?.releaseDate} </p></span>
                    <span className="datee"><CiCalendar className="icon"/>duration <p>{data.details?.duration}</p></span>

                </div>
                <div>
                    <span className="about"><p>Director:</p><p>{data.details?.director}</p></span>
                    <span className="about"><p>Cast:</p><span>{data.details?.cast.map(item => (<span key={item}>{item}</span>
                    ))}</span></span>
                    <span className="about"><p>Language:</p><p>{data.details?.languages}</p></span>
                    <span className="about"><p>Rating:</p><p>{data.details?.rating}</p></span>

                </div>

            </div>
        </div>
    )
}
export default React.memo(Details);