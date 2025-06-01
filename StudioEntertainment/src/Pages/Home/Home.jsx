import React, {useEffect, useState} from 'react';
import axios from "axios";
import Commingsooncard from "./Commingsooncard.jsx";
import './Home.css'
import {VscDebugStart} from "react-icons/vsc";
import {IoTicketSharp} from "react-icons/io5";
import {Link} from "react-router-dom";


const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://run.mocky.io/v3/2cc0b36b-7d60-4781-bb39-65986be979cc")
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <Link to="/details/Joker">
            <div className="mainCard">
                <div className="mainCard-details">
                    <h1>Joker</h1>
                    <div className="mainCard-details-buttons">

                        <div className="mainCard-details-buttons-book">
                            <span className="icon"><IoTicketSharp/>
</span>
                            <span>Book Tickets</span>
                        </div>
                        <div className="mainCard-details-buttons-book">
                            <span className="icon"><VscDebugStart/></span>
                            <span>Watch Trailer</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
            <div className="days-buttons">
                <h1>Now Showing</h1>
                <span className="days-buttons-span">
                    <button>Today</button>
                    <button>Tomorrow</button>
                    <button>3 Jun</button>
                    <button>4 Jun</button>
                    <button>5 Jun</button>
                </span>
            </div>
            <p className="yello-div">No Shows Available</p>
            <Commingsooncard/>

        </>
    )
}
export default React.memo(Home);




