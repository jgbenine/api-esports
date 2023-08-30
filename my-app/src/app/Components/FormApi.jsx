import React from "react";
import Button from "./Button";
import CountrySelect from "./FetchComp/CountrySelect";
import LeagueSelect from "./FetchComp/LeagueSelect";
import SeasonSelect from "./FetchComp/SeasonSelect";
import TeamSelect from "./FetchComp/TeamSelect";
import PlayersTeam from "../Components/api/PlayersTeam";
import LineupTeam from "../Components/api/LineupTeam";
import MatchesTeam from "../Components/api/MatchesTeam";
import GoalsByGameTime from "../Components/api/GoalsByGameTime";
import InfoPlayer from "./api/InfoPlayer";

import { AppContext } from "../AppContext";

function FormApi() {
  const {
    selectedEstatitic,
    getPlayers,
    getGames,
    selectedGames,
    selectedTimeGoals,
    getTimeGoals,
    selectedPlayers,
    getLineUp,
    infoPlayer,
  } = React.useContext(AppContext);

  return (
    <section>
      <div className="flex flex-col gap-10 bg-zinc-900 py-8 px-6 shadow-lg shadow-zinc-900">
        <article className="flex flex-col">
          <p className="text-sm text-zinc-400 pb-1">
            Selecione todas opções para obter estatísticas:
          </p>
          <span className="grid gap-3 md:grid-cols-4">
            <CountrySelect />
            <LeagueSelect />
            <SeasonSelect />
            <TeamSelect />
          </span>
        </article>
        <article className="flex flex-col gap-3  border-red-500">
          <p className="text-sm text-zinc-400">Ações:</p>
          <span className="flex max-w-[280px] gap-3 flex-col sm:flex-row sm:max-w-full">
            <Button onClick={getPlayers} textView="Jogadores do time" />
            <Button onClick={getGames} textView="Estatísticas dos jogos" />
            <Button onClick={getTimeGoals} textView="Gols por tempo de jogo" />
            <Button onClick={getLineUp} textView="Formação mais utilizada" />
            {/* <Button onClick={getInfoPlayer} textView="Info Jogador" /> */}
          </span>
        </article>
      </div>

      <div className="pt-5">
        {selectedEstatitic === "players" && <PlayersTeam />}
        {selectedEstatitic === "partidas" && selectedGames?.played ? (
          <MatchesTeam />
        ) : null}
        {selectedEstatitic === "tempoGol" && selectedTimeGoals && (
          <GoalsByGameTime />
        )}
        {selectedEstatitic === "lineup" && selectedPlayers && <LineupTeam />}

        {selectedEstatitic === "infoPlayer" && infoPlayer &&  <InfoPlayer />}
      </div>



    </section>
  );
}

export default FormApi;
