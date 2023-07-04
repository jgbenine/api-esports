import React, { createContext, useState } from 'react';
import fetchDefault from './axios/axiosConfig';
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedPlayers, setSelectedPlayers] = React.useState([]);
  const [selectedGames, setselectedGames] = React.useState([]);
  const [selectedEstatitic, setSelectedEstatitics] = React.useState(null);
  // const [selectedLineUp, setselectedLineUp] = React.useState([]);


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

    //Estatística dos jogos 
    function getGames(event) {
      event.preventDefault()
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


  //Retorna as formações mais utilizadas da temporada com um time e liga.
  // function getLineUp(event) {
  //   event.preventDefault()
  //   async function fetchLineUps(seasonId, teamId, leagueId) {
  //     try {
  //       const responseFetch = await fetchDefault(`/teams/statistics?season=${seasonId}&team=${teamId}&league=${leagueId}`)
  //       const lineUps = responseFetch.data.response.lineups;
  //       setselectedLineUp(lineUps)
  //       console.log(responseFetch)
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

  //   if (selectedLineUp && selectedLineUp.length > 0) {
  //     for (let i = 0; i < selectedLineUp.length; i++) {
  //       const lineup = selectedLineUp[i];
  //       if (lineup.played > maxPlayed) {
  //         maxPlayed = lineup.played;
  //         lineupWithMaxPlayed = lineup;
  //       }
  //     }
  //   }
  //   return lineupWithMaxPlayed;
  // }
  // const lineupWithMaxPlayed = getLineupWithMaxPlayed();

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
        selectedEstatitic,
        selectedGames,
        getGames
        // getLineUp,
        // selectedLineUp,
        // getLineupWithMaxPlayed,
        // lineupWithMaxPlayed,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};