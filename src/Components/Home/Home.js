import React, { useState } from 'react';
import Airports from './Airports';
// import '../../App.css';

export default function Home() {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [depDate, setDepDate] = useState(today)
    const [retDate, setRetDate] = useState('')
    const [tripType, setTripType] = useState('')
    const [className, setClassName] = useState('')
    const [oneWayResult, setOneWayResult] = useState('')



    console.log(depDate);
    const getFromValue = (e) => {
        console.log(e.target.value);
        setFrom(e.target.value)
    }

    const getToValue = (e) => {
        console.log(e.target.value);
        setTo(e.target.value)
    }

    const getDepDate = (e) => {
        console.log(e.target.value);
        setDepDate(e.target.value)
    }

    const getRetDate = (e) => {
        console.log(e.target.value);
        setRetDate(e.target.value)
    }

    const tripTypeChange = (e) => {
        console.log(e.target.value);
        setTripType(e.target.value)
    }

    const classChange = (e) => {
        console.log(e.target.value);
        setClassName(e.target.value)
    }

    const getFlights = (e) => {
        e.preventDefault();

        const url = `http://api.aviationstack.com/v1/flights?access_key=`;
        const key = `536871fc19058cff552765e03ff60587`;
        const parametars = `&dep_iata=${from}&arr_iata=${to}`;

        fetch(`${url}${key}${parametars}`)

            .then((res) => res.json())
            .then((data) => {
                console.log(data.data);

                let output = '';

                if (data.data.length !== 0) {

                    data.data.map((flight) => {

                        if (depDate === flight.flight_date) { // filter flights by date
                            // console.log(flight);
                            // console.log(flight.flight_date);

                            return (

                                <div className="flights-results">
                                    <div>
                                        <p className="dep-icon"><img className="icon" src="/img/dep.png" alt="" />{flight.departure.iata}</p>
                                        <p className="arr-icon"><img className="icon" src="/img/arr.png" alt="" />{flight.arrival.iata}</p>
                                    </div>

                                    <div>
                                        <p> Airline: ({flight.airline.iata}), {flight.airline.name} </p>
                                        <p> Flight Number: {flight.flight.iata} </p>
                                    </div>

                                    <div>
                                        <p> Terminal: {flight.departure.terminal} </p>
                                        <p> Terminal: {flight.arrival.terminal}</p>
                                    </div>


                                    <div>
                                        <p> Departure Date & Time: {flight.departure.scheduled}</p>
                                        <p> Arrival Date & Time: {flight.arrival.scheduled}</p>
                                    </div>

                                    <button className="btn select-flight-btn" >Select Flight</button>
                                </div>)
                        }
                    });

                    if (output.length === 0) {
                        return <p className='no-flights'> There is no flight found</p>
                    }
                }

                else {
                    return <p className='no-flights'> There is no flight found</p>

                }

                setOneWayResult(output)

            })

    }

    return (
        <div id='main'>
            <div className="main-form ">
                <h2 className="head">Find your Flight:</h2>
                <form id="form-submit" action="" onSubmit={getFlights}>

                    <div className="input-from">
                        <label htmlFor="from">Leaving From:</label>
                        <select id="from-dropdown" name="from" onChange={getFromValue} >
                            <Airports default="HAM" />
                        </select>
                    </div>
                    <div className="input-to">
                        <label htmlFor="to">Going To:</label>
                        <select id="to-dropdown" name="to" onChange={getToValue}>
                            <Airports default="" />
                        </select>
                    </div>
                    <div className="input-dep-date">
                        <label htmlFor="dep-date">Departing On:</label>
                        <input className="dep-date" type="date" onInput={getDepDate} value={depDate} />
                    </div>
                    <div className="input-ret-date">
                        <label htmlFor="ret-date">Returning On:</label>
                        <input className="ret-date" type="date" onInput={getRetDate} />
                    </div>

                    <div name="tripRadios">
                        <div className="trip-select trip flex">
                            <div className="one-way">
                                <label htmlFor="oneway">One way</label>
                                <input onChange={tripTypeChange} type="radio" name="trip" id="oneway" value="one-way" defaultChecked required="required" />
                            </div>
                            <div className="round-trip">
                                <label htmlFor="round-trip">Round Trip</label>
                                <input onChange={tripTypeChange} type="radio" name="trip" id="round-trip" value="round-trip" required="required" />
                            </div>
                            <div className="multi-trip">
                                <label htmlFor="multitrip">Multi Trips</label>
                                <input onChange={tripTypeChange} type="radio" name="trip" id="multitrip" value="multi-trip" required="required" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="class-select flex">
                            <div className="f-class">
                                <label htmlFor="f-class">F - Class</label>
                                <input onChange={classChange} type="radio" name="class-select" id="f-class" value="f-class"
                                    required="required" />
                            </div>
                            <div className="b-class">
                                <label htmlFor="b-class">B - Class</label>
                                <input onChange={classChange} type="radio" name="class-select" id="b-class" value="b-class"
                                    required="required" />
                            </div>

                            <div className="e-class">
                                <label htmlFor="e-class">E - Class</label>
                                <input onChange={classChange} type="radio" name="class-select" id="e-class" value="e-class" defaultChecked
                                    required="required" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="age-select flex">
                            <div className="adult">
                                <label htmlFor="adult">Adult</label>
                                <input type="number" name="age-select" id="adult" value="1" min="1" max="8"
                                    required="required" />
                            </div>

                            <div className="child">
                                <label htmlFor="child">Child</label>
                                <input type="number" name="age-select" id="child" value="0" min="0" max="5" />
                            </div>

                            <div className="infant">
                                <label htmlFor="e-class">Infant</label>
                                <input type="number" name="age-select" id="infant" value="0" min="0" max="5" />
                            </div>
                        </div>
                    </div>

                    <div className="submit-btn">
                        <button type="submit" className="btn" >Order Ticket Now</button>
                    </div>
                </form>
            </div>


            <>{oneWayResult}</>

            <div id="select-flight"></div>
        </div>
    )
}
