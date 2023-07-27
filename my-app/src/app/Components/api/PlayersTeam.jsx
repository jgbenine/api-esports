import { AppContext } from "@/app/AppContext";
import React from "react";
import Loading from "../Loading";

function PlayersTeam() {
  const { selectedPlayers } = React.useContext(AppContext);

  return (
    <section>
      <h1 className="title-content">Todos os Jogadores da temporada:</h1>
      {selectedPlayers ? (
        <div className="mt-3">
          {selectedPlayers.map((player, index) => (
            <div key={index}>
              <ul className="grid grid-cols-5 gap-x-3 gap-y-6">
                {player.players.map((playerData) => (
                  <li
                    key={playerData.player.id}
                    className="flex flex-col gap-2 max-w-[150px] border-b-2 border-zinc-600 pb-3"
                  >
                    <span>
                      <img src={playerData.photo} alt="Avatar Jogador" className="rounded-xl" />
                    </span>
                    <div className="flex flex-col gap-1 text-sm">
                      <p>
                        <label className="text-amber-100">Nome:</label>{" "}
                        {playerData.name}
                      </p>
                      <p>
                        <label className="text-amber-100">Idade:</label>{" "}
                        {playerData.age} Anos
                      </p>
                      <p>
                        <label className="text-amber-100">Camisa:</label>{" "}
                        {playerData.number}
                      </p>
                      <p>
                        <label className="text-amber-100">Posição:</label>{" "}
                        {playerData.position}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
}

export default PlayersTeam;
