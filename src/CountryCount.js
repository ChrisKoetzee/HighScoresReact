import React from "react";

function CountryCount(props) {
    return (
        <div>
           {props.allCountryScores.map((country, index) => (
             <h2 key = {index}>High Scores : {country}</h2>            
           ))} 
        </div>
    )
}


export default CountryCount;