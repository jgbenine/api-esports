import React from 'react'
import fetchDefault from '../axios/axiosConfig';
import Button from './Button';
import CountrySelect from './FetchComp/CountrySelect';
import LeagueSelect from './FetchComp/LeagueSelect';
import SeasonSelect from './FetchComp/SeasonSelect';
import TeamSelect from './FetchComp/TeamSelect';
import { AppContext } from '../AppContext';

function FormApi() {
  const {getPlayers, selectedEstatitic, selectedPlayers, selectedLineUp, getLineUp, lineupWithMaxPlayed } = React.useContext(AppContext)
  // const [selectedLeague, setSelectedLeague] = React.useState('');
  // const [selectedSeason, setSelectedSeason] = React.useState('');
  // const [selectedTeam, setSelectedTeam] = React.useState('');
  // const [selectedPlayers, setSelectedPlayers] = React.useState([]);
  // const [selectedLineUp, setselectedLineUp] = React.useState([]);
  const [selectedGames, setselectedGames] = React.useState([]);
  const [selectedTimeGoals, setselectedTimeGoals] = React.useState([]);
  // const [selectedEstatitic, setSelectedEstatitics] = React.useState(null);

  console.log(selectedLineUp)
  console.log(lineupWithMaxPlayed)


  //Formação
  // function getLineUp() {
  //   async function fetchLineUps(seasonId, teamId, leagueId) {
  //     try {
  //       const responseFetch = await fetchDefault(`/teams/statistics?season=${seasonId}&team=${teamId}&league=${leagueId}`)
  //       const lineUps = responseFetch.data.response.lineups;
  //       setselectedLineUp(lineUps)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   if (selectedLineUp !== null) {
  //     fetchLineUps(selectedSeason, selectedTeam, selectedLeague)
  //   }
  //   setSelectedEstatitics('lineup')
  // }


  // function getLineupWithMaxPlayed() {
  //   let maxPlayed = 0;
  //   let lineupWithMaxPlayed = null;

  //   for (let i = 0; i < selectedLineUp.length; i++) {
  //     const lineup = selectedLineUp[i];
  //     if (lineup.played > maxPlayed) {
  //       maxPlayed = lineup.played;
  //       lineupWithMaxPlayed = lineup;
  //     }
  //   }

  //   return lineupWithMaxPlayed;
  // }
  // const lineupWithMaxPlayed = getLineupWithMaxPlayed();


  //Jogos info
  function getGames() {
    console.log('get Games')
    async function fetchGames(seasonId, teamId, leagueId) {
      try {
        const responseFetch = await fetchDefault(`/teams/statistics?season=${seasonId}&team=${teamId}&league=${leagueId}`)
        const games = responseFetch.data.response.fixtures;
        setselectedGames(games)
      } catch (error) {
        console.log(error)
      }
    }
    if (selectedGames !== null) {
      fetchGames(selectedSeason, selectedTeam, selectedLeague)
    }
    setSelectedEstatitics('partidas')
  }

  //Gols por tempo de jogo
  function getTimeGoals() {
    console.log('get TimeGoals')
    async function fetchTimeGoals(seasonId, teamId, leagueId) {
      try {
        const responseFetch = await fetchDefault(`/teams/statistics?season=${seasonId}&team=${teamId}&league=${leagueId}`)
        const timeGoals = responseFetch.data.response.goals.against.minute;
        setselectedTimeGoals(timeGoals)
      } catch (error) {
        console.log(error)
      }
    }
    if (selectedTimeGoals !== null) {
      fetchTimeGoals(selectedSeason, selectedTeam, selectedLeague)
    }
    setSelectedEstatitics('tempoGol')
  }

  return (
    <section>
      <CountrySelect />
      <LeagueSelect />
      <SeasonSelect />
      <TeamSelect />
    

      <div>
          <div className="flex gap-2 mt-2">
            <Button onClick={getLineUp} textView='Formação mais utilizada' />
            <Button onClick={getPlayers} textView='Jogadores' />
            <Button onClick={getGames} textView='Estásticas dos jogos' />
            <Button onClick={getTimeGoals} textView='Gols por tempo de jogo' />
          </div>
      </div>


      {selectedEstatitic === 'players' &&
        <div>
          <h1 className="title-content">Todos os Jogadores da temporada:</h1>
          <ul className="mt-3">
            {selectedPlayers.map((player, index) => (
              <li key={index}>
                <ul className="grid grid-cols-5 gap-3">
                  {player.players.map((playerData, playerIndex) => (
                    <li key={playerIndex} className="border border-zinc-400 px-3 py-2 rounded-sm">
                      <p className="text-sm px-2">
                        <label className="text-zinc-300">Nome:</label> {' '}
                        {playerData.name}
                      </p>
                      <p className="text-sm px-2">
                        <label className="text-zinc-300">Idade:</label> {' '}
                        {playerData.age}
                      </p>
                      <p className="text-sm px-2">
                        <label className="text-zinc-300">Posição:</label> {' '}
                        {playerData.position}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>}

      <div>
        {selectedEstatitic === 'lineup' && 
          <article className="w-[300px]">
            <h1 className="title-content">Formação mais utilizada do time no campeonato</h1>
            <p className="p-2 border border-zinc-600 text-left">Formação: {lineupWithMaxPlayed.formation}</p>
            <p className="p-2 border border-zinc-600 text-left">Partidas com formação: {lineupWithMaxPlayed.played} partidas</p>
          </article>
        }
      </div>

      <div>
        {selectedEstatitic === 'partidas' && selectedGames?.played ? (
          <article className="w-[300px]">
            <h3 className="title-content">Estatísticas de partidas</h3>
            <p className="p-2 border border-zinc-600 text-left">Total de partidas jogadas: {selectedGames.played.total} partidas</p>
            <p className="p-2 border border-zinc-600 text-left">Total de partidas ganhas: {selectedGames.wins.total} partidas</p>
            <p className="p-2 border border-zinc-600 text-left">Total de partidas empatadas: {selectedGames.draws.total} partidas</p>
            <p className="p-2 border border-zinc-600 text-left">Total de partidas perdidas: {selectedGames.loses.total} partidas</p>
          </article>
        ) : null}
      </div>

      <div>
        {selectedEstatitic === 'tempoGol' && selectedTimeGoals && (
          <article>
            <h3 className="title-content">Estatísticas de gols por tempo de jogo:</h3>
            {Object.entries(selectedTimeGoals).map(([interval, data]) => (
              <div key={interval} className="grid grid-cols-3 w-[600px]">
                <p className="p-2 border border-zinc-600 text-left">Intervalo: {interval} min</p>
                <p className="p-2 border border-zinc-600 text-center">Total de gols: {data.total}</p>
                <p className="p-2 border border-zinc-600 text-center">Porcentagem: {data.percentage}</p>
              </div>
            ))}
          </article>
        )}
      </div>


    </section>
  )
}

export default FormApi
