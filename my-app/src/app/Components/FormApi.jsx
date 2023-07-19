import React from "react";
import Button from "./Button";
import CountrySelect from "./FetchComp/CountrySelect";
import LeagueSelect from "./FetchComp/LeagueSelect";
import SeasonSelect from "./FetchComp/SeasonSelect";
import TeamSelect from "./FetchComp/TeamSelect";
import { AppContext } from "../AppContext";
import PlayersTeam from "./FetchManipulation/PlayersTeam";
import LineupTeam from "./FetchManipulation/LineupTeam";
import MatchesTeam from "./FetchManipulation/MatchesTeam";
import GoalsByGameTime from "./FetchManipulation/GoalsByGameTime";

function FormApi() {
  const {
    selectedEstatitic,
    getPlayers,
    selectedPlayers,
    getGames,
    selectedGames,
    selectedTimeGoals,
    getTimeGoals,
  } = React.useContext(AppContext);

  return (
    <section>
      <div className="flex flex-col gap-10 bg-zinc-900 py-8 px-6">
        <article className="flex flex-col">
          <p className="text-sm text-zinc-400 pb-1">Selecione todas opções para obter estatísticas:</p>
          <div className="grid gap-3 md:grid-cols-4">
            <CountrySelect />
            <LeagueSelect />
            <SeasonSelect />
            <TeamSelect />
          </div>
        </article>
        <div className="flex flex-col gap-3">
          <p className="text-sm text-zinc-400">Ações:</p>
          <div className="flex max-w-[280px] gap-3 flex-col sm:flex-row sm:max-w-full">
            {/* <Button onClick={getLineUp} textView='Formação mais utilizada' /> */}
            <Button onClick={getPlayers} textView="Jogadores do time" />
            <Button onClick={getGames} textView="Estatísticas dos jogos" />
            <Button onClick={getTimeGoals} textView="Gols por tempo de jogo" />
          </div>
        </div>
      </div>

      <div className="pt-5">
        {selectedEstatitic === "players" && <PlayersTeam />}
        {selectedEstatitic === "partidas" && selectedGames?.played ? (
          <MatchesTeam />
        ) : null}

        {selectedEstatitic === "tempoGol" && selectedTimeGoals && (
          <GoalsByGameTime />
        )}

        {/* <>
        {selectedEstatitic === 'lineup' &&
          <LineupTeam />
        }
      </> 
      */}
      </div>
    </section>
  );
}

export default FormApi;
