import {useContext} from "react";
import PlayersTeam from "./api/PlayersTeam";
import LineupTeam from "./api/LineupTeam";
import MatchesTeam from "./api/MatchesTeam";
import GoalsByGameTime from "./api/GoalsByGameTime";
import InfoPlayer from "./api/InfoPlayer";
import { AppContext } from "../AppContext";

function FormApi() {
  const {
    selectedEstatitic,
    selectedGames,
    selectedTimeGoals,
    selectedPlayers,
    infoPlayer,
  } = useContext(AppContext);

  return (
    <section>
        {selectedEstatitic === "players" && <PlayersTeam />}
        {selectedEstatitic === "partidas" && selectedGames?.played  && <MatchesTeam />}
        {selectedEstatitic === "tempoGol" && selectedTimeGoals && <GoalsByGameTime />}
        {selectedEstatitic === "lineup" && selectedPlayers && <LineupTeam />}
        {selectedEstatitic === "infoPlayer" && infoPlayer && <InfoPlayer />}
    </section>
  );
}

export default FormApi;
