import { AppContext } from "@/app/AppContext";
import React from "react";
import Loading from "../Loading";

function LineupTeam() {
  const { lineupWithMaxPlayed } = React.useContext(AppContext);

  return (
    <article className="w-full">
      <h1 className="title-content">
        Formação mais utilizada do time no campeonato
      </h1>
      {lineupWithMaxPlayed ? (
        <div>
          <p className="p-2 border border-zinc-600 text-left">
            Formação: {lineupWithMaxPlayed.formation}
          </p>
          <p className="p-2 border border-zinc-600 text-left">
            Partidas com formação: {lineupWithMaxPlayed.played} partidas
          </p>
        </div>
      ) : (
        <Loading />
      )}
    </article>
  );
}

export default LineupTeam;
