import React from 'react';
import airportsData from '../../airportsData.json';

function Airports(props) {
    return (
        <>
            <option value="">please Select your airport flight</option>
            {airportsData.map((data) => (
                <option key={data.iataCode} value={data.iataCode} defaultValue={data.iataCode == props.default} >
                    {data.iataCode}, {data.location}, {data.country}
                </option>
            ))}
        </>
    )
}

export default Airports
