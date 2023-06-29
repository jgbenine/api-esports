import React, { createContext, useState } from 'react';
import fetchDefault from './axios/axiosConfig';
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedPlayers, setSelectedPlayers] = React.useState([]);
  const [selectedLineUp, setselectedLineUp] = React.useState([]);
  const [selectedEstatitic, setSelectedEstatitics] = React.useState(null);


  //Retorna todos os jogadores de um time
  function getPlayers(event) {
    event.preventDefault()
    async function fetchPlayers(teamId) {
      try {
        const responseFetch = await fetchDefault(`/players/squads?team=${teamId}`)
        const players = responseFetch.data.response;
        setSelectedPlayers(players)
      } catch (error) {
        console.log(error)
      }
    }
    if (selectedPlayers !== null) {
      fetchPlayers(selectedTeam)
    }
    setSelectedEstatitics('players')
  }

  //Retorna as formações mais utilizadas da temporada com um time e liga.
  function getLineUp() {
    async function fetchLineUps(seasonId, teamId, leagueId) {
      try {
        const responseFetch = await fetchDefault(`/teams/statistics?season=${seasonId}&team=${teamId}&league=${leagueId}`)
        const lineUps = responseFetch.data.response.lineups;
        setselectedLineUp(lineUps)
      } catch (error) {
        console.log(error)
      }
    }
    if (selectedLineUp !== null) {
      fetchLineUps(selectedSeason, selectedTeam, selectedLeague)
    }
    setSelectedEstatitics('lineup')
  }

  function getLineupWithMaxPlayed() {
    let maxPlayed = 0;
    let lineupWithMaxPlayed = null;

    for (let i = 0; i < selectedLineUp.length; i++) {
      const lineup = selectedLineUp[i];
      if (lineup.played > maxPlayed) {
        maxPlayed = lineup.played;
        lineupWithMaxPlayed = lineup;
      }
    }
    return lineupWithMaxPlayed;
  }
  const lineupWithMaxPlayed = getLineupWithMaxPlayed();




  return (
    <AppContext.Provider
      value={{
        selectedCountry,
        setSelectedCountry,
        selectedLeague,
        setSelectedLeague,
        selectedSeason,
        setSelectedSeason,
        selectedTeam,
        setSelectedTeam,
        getPlayers,
        selectedPlayers,
        getLineUp,
        selectedLineUp,
        selectedEstatitic,
        getLineupWithMaxPlayed,
        lineupWithMaxPlayed,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};