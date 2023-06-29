import React, { createContext, useState } from 'react';
import fetchDefault from './axios/axiosConfig';
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedPlayers, setSelectedPlayers] = React.useState([]);
  const [selectedEstatitic, setSelectedEstatitics] = React.useState(null);


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
        selectedEstatitic
      }}
    >
      {children}
    </AppContext.Provider>
  );
};