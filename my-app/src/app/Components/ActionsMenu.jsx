import React from "react";
import Button from "./Button";
import CountrySelect from "./FetchComp/CountrySelect";
import LeagueSelect from "./FetchComp/LeagueSelect";
import SeasonSelect from "./FetchComp/SeasonSelect";
import TeamSelect from "./FetchComp/TeamSelect";
import { AppContext } from "../AppContext";
function ActionsMenu() {
  const { getPlayers, getGames, getTimeGoals, getLineUp } = React.useContext(AppContext);

  return (
    <section className="flex flex-col gap-10 bg-zinc-900 py-8 px-6 shadow-lg shadow-zinc-900">
      <div className="flex flex-col">
        <p className="text-sm text-zinc-400 pb-1">
          Selecione todas opções para obter estatísticas:
        </p>
        <span className="grid gap-3 md:grid-cols-4">
          <CountrySelect />
          <LeagueSelect />
          <SeasonSelect />
          <TeamSelect />
        </span>
      </div>
      <div className="flex flex-col gap-3 border-red-500">
        <p className="text-sm text-zinc-400">Ações:</p>
        <span className="flex max-w-[280px] gap-3 flex-col sm:flex-row sm:max-w-full">
          <Button onClick={getPlayers} textView="Jogadores do time" />
          <Button onClick={getGames} textView="Estatísticas dos jogos" />
          <Button onClick={getTimeGoals} textView="Gols por tempo de jogo" />
          <Button onClick={getLineUp} textView="Formação mais utilizada" />
          {/* <Button onClick={getInfoPlayer} textView="Info Jogador" /> */}
        </span>
      </div>
    </section>
  );
}

export default ActionsMenu;
