import React, {useEffect, useState} from 'react';
import './Commingsoon.css'
import axios from "axios";
import {Link} from "react-router-dom";

const Commingsooncard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://run.mocky.io/v3/2cc0b36b-7d60-4781-bb39-65986be979cc")
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    })
    return (
        <>
            <h1 className="h1">Comming Soon</h1>
            <div className="card">

                {
                    data.map(item => (
                        <Link to={`/details/${item.title}`} className="card-item" key={item.title}>
                            <img src={item.posterUrl} alt=""/>
                            <p className='date'>{item.shortInfo.releaseDate}</p>
                            <p>{item.description}</p>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}
export default React.memo(Commingsooncard);