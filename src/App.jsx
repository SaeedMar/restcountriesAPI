import './App.css';
import worldMap from './assets/world_map.png'
import AllCountries from './components/AllCountries.jsx';
import CountrySearch from "./components/CountrySearch.jsx";



function App() {

    return (
        <>
            <header>
                <div>
                    <img src={worldMap} alt='world-map'/>
                </div>
            </header>
<article>
    < AllCountries/>
</article>
            <article>
                <CountrySearch/>
            </article>

        </>
    )
}

export default App
