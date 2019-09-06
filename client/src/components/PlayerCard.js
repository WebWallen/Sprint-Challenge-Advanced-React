import React from "react";
import "../App.js";

export default function PlayerCard (props) {
    return (
        <>
            {props.players.map(player => (
                <div className="player-card" key={player.id} players={player}>
                    <h2>{player.name}</h2>
                    <h3>{player.country}</h3>
                    <p>Searches: {player.searches}</p>
                </div>
            ))}
        </>
    )
}