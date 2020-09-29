import React from 'react';
import airportsData from '../../airportsData.json';

function Airports(props) {
    return (
        <div>
            {airportsData.map((data) => (
            <option data={props.data}>
                {data.iataCode}, {data.location}, {data.country}
            </option>
            ))}
        </div>
    )
}

export default Airports
