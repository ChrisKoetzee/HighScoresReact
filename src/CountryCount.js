import React from "react";
import allCountryScores from "./scoreArray";

const CountryCount = () => {
    return (
      <div className="container">
        <table>
        {allCountryScores.map((country, index) => (
            <tbody key={index.id}>
              <tr key={index.id}>
                <th><h2>High Scores : {country.name}</h2></th>
              </tr>
              <tr>
                <th>Player Name - </th>
                <th>High Scores - </th>
              </tr> 
              {country.scores.map((score, i)=>{
                return (
                <tr key={i.id}>
                <td className="score-names">{score.n}</td>
                <td className="score-scores">{score.s}</td>
                </tr>
                )
              })}
            </tbody>
        ))}
                  </table>
      </div>
    );
  // }
};

export default CountryCount;
