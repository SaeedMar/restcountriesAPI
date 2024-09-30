import React, { useState } from 'react';
import axios from 'axios';
import "../App.css";

export default function AllCountries() {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState('');
    const [buttonVisible, setButtonVisible] = useState(true);

    async function fetchCountries() {
        setError("");
        try {
            const response = await axios.get("https://restcountries.com/v3.1/all");
            setCountries(response.data);
            setButtonVisible(false);
        } catch (error) {
            setError("Er is iets misgegaan tijdens het ophalen van de data.");
        }
    }

    return (
        <div>
            {error && <p>{error}</p>}
            {buttonVisible && <button onClick={fetchCountries}>Fetch All Countries</button>}
            <ul className="countries-grid">
                {countries.map((country, index) => (
                    <li key={index} className="countryItem">
                        <div className="flag-country">
                            <img className="flagPhoto" src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="60" height="25"/>
                            <p className={`region-${country.region.toLowerCase()}`}>
                                {country.name.common}
                            </p>
                        </div>

                        <p>Has a population of: {country.population.toLocaleString()} people</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
