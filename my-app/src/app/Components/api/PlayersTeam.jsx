import { AppContext } from "@/app/AppContext";
import React from "react";
import Loading from "../Loading";

function PlayersTeam() {
  const { selectedPlayers } = React.useContext(AppContext);

  return (
    <section>
      <h1 className="title-content">Todos os Jogadores da temporada:</h1>
      {selectedPlayers ? (
        <ul className="mt-3">
          {selectedPlayers.map((player, index) => (
            <li key={index}>
              <ul className="grid grid-cols-5 gap-3">
                {player.players.map((playerData, playerIndex) => (
                  <li
                    key={playerIndex}
                    className="border border-zinc-400 px-3 py-2 rounded-sm"
                  >
                    <p className="text-sm px-2">
                      <label className="text-zinc-300">Nome:</label>{" "}
                      {playerData.name}
                    </p>
                    <p className="text-sm px-2">
                      <label className="text-zinc-300">Idade:</label>{" "}
                      {playerData.age}
                    </p>
                    <p className="text-sm px-2">
                      <label className="text-zinc-300">Posição:</label>{" "}
                      {playerData.position}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </section>
  );
}

export default PlayersTeam;
