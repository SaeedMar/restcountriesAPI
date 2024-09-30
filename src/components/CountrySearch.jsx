import React, { useState } from 'react';
import axios from 'axios';
import { formatPopulation } from "../assets/helpers/numberCorrection.jsx";
import "../app.css"
export default function CountrySearch() {
    const [country, setCountry] = useState(null);
    const [error, setError] = useState('');
    const [countryName, setCountryName] = useState('');

    async function fetchCountry() {
        setError('');
        setCountry(null);
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`); // Gebruik 'name' endpoint
            setCountry(response.data[0]);
            setCountryName('');
        } catch (error) {
            setError(`${countryName} bestaat niet.`);
            setCountry(null);
            setCountryName('');
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Country Name"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
            />
            <button onClick={fetchCountry}>Zoek Countries</button>
            {error && <p>{error}</p>}
            {country && (
                <div className='countryInfo'>
                    <img src={country.flags?.svg} alt={`flag of ${country.name?.common}`} width="60" height="25" />
                    <p>
                        {country.name?.common} is located in {country.subregion?.toLowerCase() || "unknown"} and its capital is {country.capital?.[0] || 'N/A'}.
                    </p>
                    <p>
                        It has a population of {formatPopulation(country.population)} million people.
                    </p>
                    <p>
                        It borders {country.borders ? country.borders.length : 0} countries.
                    </p>
                    <p>
                        Websites can be found via the {country.tld?.[0] || "N/A"} domain.
                    </p>
                </div>
            )}
        </div>
    );
}






// import react, {useState} from 'react';
// import axios from 'axios';
// import {formatPopulation} from "../assets/helpers/numberCorrection.jsx";
//
// export default function CountrySearch() {
//     const [country, setCountry] = useState('null');
//     const [error, setError] = useState('');
//     const [countryName, setCountryName] = useState('');
//
//
//
//     async function fetchCountry() {
//         setError('');
//         setCountry(null);
//         try{
//             const response = await axios.get(`https://restcountries.com/v3.1/${countryName}`);
//             setCountry(response.data[0]);
//             setCountryName('');
//         }catch(error){
//             setError(`${countryName} Bestaat niet`);
//             setCountry(null);
//
//         }
//     }
//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Country Name"
//                 value={countryName}
//                 onChange={(e) => setCountry(e.target.value)}
//
//             />
//             <button onClick={fetchCountry}>Zoek Countries</button>
//             {error && <p>{error}</p>}
//             {country && (
//                 <div>
//                     <img src={country.flags?.svg} alt={'flag of ${country.name?.common}'} width="60" height="25"/>
//                     <p>{country.name?.common}is located in {country.subregion.toLowerCase() || "unknown"}and its capital is {country.capital[0]}</p>
//                     <p>It has a population of {formatPopulation(country.population.toLocaleString())}Mil People</p>
//                     <p>its borders are {country.borders ? country.borders.length : 0} countries</p>
//                     <p>Websites can be found via {country.tld?.[0] || "N.A"} domain</p>
//
//                 </div>
//             )}
//         </div>
//     );
// }
//
