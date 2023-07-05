import React from 'react'
import Button from './Button';
import CountrySelect from './FetchComp/CountrySelect';
import LeagueSelect from './FetchComp/LeagueSelect';
import SeasonSelect from './FetchComp/SeasonSelect';
import TeamSelect from './FetchComp/TeamSelect';
import { AppContext } from '../AppContext';
import PlayersTeam from './FetchManipulation/PlayersTeam';
import LineupTeam from './FetchManipulation/LineupTeam';
import MatchesTeam from './FetchManipulation/MatchesTeam';
import GoalsByGameTime from './FetchManipulation/GoalsByGameTime';

function FormApi() {
  const {
    selectedEstatitic,
    getPlayers,
    selectedPlayers,
    getGames,
    selectedGames,
    selectedTimeGoals,
    getTimeGoals
  } = React.useContext(AppContext)

  return (
    <section>
      <CountrySelect />
      <LeagueSelect />
      <SeasonSelect />
      <TeamSelect />

      <div>
        <div className="flex gap-2 mt-2">
          {/* <Button onClick={getLineUp} textView='Formação mais utilizada' /> */}
          <Button onClick={getPlayers} textView='Jogadores do time' />
          <Button onClick={getGames} textView='Estatísticas dos jogos' />
          <Button onClick={getTimeGoals} textView='Gols por tempo de jogo' />
        </div>
      </div>

      {selectedEstatitic === 'players' &&
        <PlayersTeam />
      }
      {selectedEstatitic === 'partidas' && selectedGames?.played ? (
        <MatchesTeam />
      ) : null}

      {selectedEstatitic === 'tempoGol' && selectedTimeGoals && (
        <GoalsByGameTime />
      )}

      {/* <>
        {selectedEstatitic === 'lineup' &&
          <LineupTeam />
        }
      </> 
      */}
    </section>
  )
}

export default FormApi
