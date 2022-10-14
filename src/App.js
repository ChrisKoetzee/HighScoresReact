import React from "react";
import CountryCount from "./CountryCount.js";
import ScoreCount from "./ScoreCount.js";
import NameCount from "./NameCount.js";
import getAllScores from "./scoreArray"


function App() {
  return (
    <div>
      <h1>High Scores Per Country</h1> 
      <div>
       <CountryCount country = {getAllScores.name} />
      <table>
        <tr>
        <th>Player Name - </th>
        <th>High Scores - </th>
        </tr>
        <NameCount n = {getAllScores.scores.n}/>
        <ScoreCount s = {getAllScores.scores.s}/>  
      </table>
      </div>
    </div>
  );
}


export default App;
