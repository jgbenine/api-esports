import React, { createContext, useState } from "react";
import fetchDefault from "./axios/axiosConfig";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedPlayers, setSelectedPlayers] = React.useState([]);
  const [selectedGames, setselectedGames] = React.useState([]);
  const [selectedTimeGoals, setselectedTimeGoals] = React.useState([]);
  const [selectedEstatitic, setSelectedEstatitics] = React.useState(null);
  const [selectedLineUp, setselectedLineUp] = React.useState([]);
  const [infoPlayer, setInfoPlayer] = React.useState([]);

  //Retorna todos os jogadores de um time
  function getPlayers(event) {
    event.preventDefault();
    async function fetchPlayers(teamId) {
      try {
        const responseFetch = await fetchDefault(
          `/players/squads?team=${teamId}`
        );
        const players = responseFetch.data.response;
        setSelectedPlayers(players);
      } catch (error) {
        console.log(error);
      }
    }
    if (selectedPlayers !== null) {
      fetchPlayers(selectedTeam);
    }
    setSelectedEstatitics("players");
  }

  //Informações de jogador  
  function getInfoPlayer(event){
    event.preventDefault();

    async function fetchInfoPlayer(){
      const responseFetch = await fetchDefault(`/players?id=2283&season=2019`);
      const data = responseFetch.data.response;
      setInfoPlayer(data)
      console.log(infoPlayer);
    }
    fetchInfoPlayer();

    setSelectedEstatitics("infoPlayer");
  }

  //Estatística dos jogos
  function getGames(event) {
    event.preventDefault();
    async function fetchGames(seasonId, teamId, leagueId) {
      try {
        const responseFetch = await fetchDefault(
          `/teams/statistics?season=${seasonId}&team=${teamId}&league=${leagueId}`
        );
        const games = responseFetch.data.response.fixtures;
        setselectedGames(games);
      } catch (error) {
        console.log(error);
      }
    }
    if (selectedGames !== null) {
      fetchGames(selectedSeason, selectedTeam, selectedLeague);
    }
    setSelectedEstatitics("partidas");
  }

  //Gols por tempo de jogo
  function getTimeGoals(event) {
    event.preventDefault();
    async function fetchTimeGoals(seasonId, teamId, leagueId) {
      try {
        const responseFetch = await fetchDefault(
          `/teams/statistics?season=${seasonId}&team=${teamId}&league=${leagueId}`
        );
        const timeGoals = responseFetch.data.response.goals.against.minute;
        setselectedTimeGoals(timeGoals);
      } catch (error) {
        console.log(error);
      }
    }
    if (selectedTimeGoals !== null) {
      fetchTimeGoals(selectedSeason, selectedTeam, selectedLeague);
    }
    setSelectedEstatitics("tempoGol");
  }

  //Formação mais utilizada.
  function getLineUp(event) {
    event.preventDefault();
    async function fetchLineUps(seasonId, teamId, leagueId) {
      try {
        const responseFetch = await fetchDefault(
          `/teams/statistics?season=${seasonId}&team=${teamId}&league=${leagueId}`
        );
        const lineUps = responseFetch.data.response.lineups;
        setselectedLineUp(lineUps);
      } catch (error) {
        console.log(error);
      }
    }
    if (selectedLineUp !== null) {
      fetchLineUps(selectedSeason, selectedTeam, selectedLeague);
    }
    setSelectedEstatitics("lineup");
  }
  
  //Formação mais Jogada na temporada.
  function getLineupWithMaxPlayed() {
    let maxPlayed = 0;
    let lineupWithMaxPlayed = null;

    if (selectedLineUp && selectedLineUp.length > 0) {
      for (let i = 0; i < selectedLineUp.length; i++) {
        const lineup = selectedLineUp[i];
        if (lineup.played > maxPlayed) {
          maxPlayed = lineup.played;
          lineupWithMaxPlayed = lineup;
        }
      }
    }
    return lineupWithMaxPlayed;
  }
  const lineupWithMaxPlayed = getLineupWithMaxPlayed();

  return (
    <AppContext.Provider
      value={{
        selectedEstatitic,
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
        selectedGames,
        getGames,
        selectedTimeGoals,
        getTimeGoals,
        getLineUp,
        selectedLineUp,
        getLineupWithMaxPlayed,
        lineupWithMaxPlayed,
        getInfoPlayer,
        infoPlayer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
