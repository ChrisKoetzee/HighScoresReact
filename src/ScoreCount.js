import React from "react";

function ScoreCount(props) {
    return (
        <div>
              {props.allCountryScores.map((s, index) => (
                <td key = {index}>{s}</td>
            ))}
        </div>
    )
}


export default ScoreCount;