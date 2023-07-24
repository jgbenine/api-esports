import { AppContext } from "@/app/AppContext";
import React from "react";
import Loading from "../Loading";

function MatchesTeam() {
  const { selectedGames } = React.useContext(AppContext);

  return (
    <article className="w-full">
      <h3 className="title-content">Estatísticas de partidas</h3>
      {selectedGames ? (
        <>
          <p className="p-2 border border-zinc-600 text-left">
            Total de partidas jogadas: {selectedGames.played.total} partidas
          </p>
          <p className="p-2 border border-zinc-600 text-left">
            Total de partidas ganhas: {selectedGames.wins.total} partidas
          </p>
          <p className="p-2 border border-zinc-600 text-left">
            Total de partidas empatadas: {selectedGames.draws.total} partidas
          </p>
          <p className="p-2 border border-zinc-600 text-left">
            Total de partidas perdidas: {selectedGames.loses.total} partidas
          </p>
        </>
      ) : (
        <Loading />
      )}
    </article>
  );
}

export default MatchesTeam;
