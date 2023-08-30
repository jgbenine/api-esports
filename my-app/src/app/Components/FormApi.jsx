import React from "react";
import PlayersTeam from "../Components/api/PlayersTeam";
import LineupTeam from "../Components/api/LineupTeam";
import MatchesTeam from "../Components/api/MatchesTeam";
import GoalsByGameTime from "../Components/api/GoalsByGameTime";
import InfoPlayer from "./api/InfoPlayer";
import ActionsMenu from "./ActionsMenu";
import { AppContext } from "../AppContext";

function FormApi() {
  const {
    selectedEstatitic,
    selectedGames,
    selectedTimeGoals,
    selectedPlayers,
    infoPlayer,
  } = React.useContext(AppContext);

  return (
    <section>
      <ActionsMenu />
      <div className="pt-5">
        {selectedEstatitic === "players" && <PlayersTeam />}
        {selectedEstatitic === "partidas" && selectedGames?.played ? (
          <MatchesTeam />
        ) : null}
        {selectedEstatitic === "tempoGol" && selectedTimeGoals && (
          <GoalsByGameTime />
        )}
        {selectedEstatitic === "lineup" && selectedPlayers && <LineupTeam />}

        {selectedEstatitic === "infoPlayer" && infoPlayer && <InfoPlayer />}
      </div>
    </section>
  );
}

export default FormApi;
