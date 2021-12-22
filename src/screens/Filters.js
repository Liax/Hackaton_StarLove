import Header from "../components/Header"
import Galaxy from "../assets/galaxy01.png"
import Filtre from "../components/Filtre"
import Chat from "./Chat"
import Home from "./Home"

import "../styles/Filter.css"

export default function Filters()  {


        console.log(Home())

        return (
            <div className="filters">
                <Header />
                <img className="filters-galaxy" src={Galaxy} alt="galaxy"></img>
                <img className="filters-galaxy2" src={Galaxy} alt="galaxy"></img> 
                <div className="filter-box">
                <div className="title-filter"><h2>Bienvenue :</h2></div>
                <div className="title-filter"><h2>Choisissez vos filtres :</h2></div> 
                    <div className="holder-filter-container">
                        <div className="filter-container">
                            <div className="selector"><Filtre select="gender" nameDisplay="Genre" /></div>
                            <div className="selector"><Filtre select="species" nameDisplay="Espèces"/></div>
                            <div className="selector"><Filtre select="height" nameDisplay="Taille"/></div>
                            <div className="selector"><Filtre select="mass" nameDisplay="Poids"/></div>
                            <div className="holder-filter-button"><button className="filter-button">Commencer</button></div>
                        </div>
                    </div>
                </div> 
                <Chat />
                <p>Et ici le Chat</p>
                <p>Et ici le Chat</p>
                <p>Et ici le Chat</p>
                <p>Et ici le Chat</p>
                <p>Et ici le Chat</p>
                <p>Et ici le Chat</p>


            </div>
        )
}