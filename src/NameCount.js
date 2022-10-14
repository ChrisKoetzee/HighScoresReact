import React from "react";

function NameCount(props) {
    return (
        <div>
            {props.allCountryScores.map((n, index) => (
                <td key = {index}>{n}</td>
            ))}
        </div>
    )
}

export default NameCount;