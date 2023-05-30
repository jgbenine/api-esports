import { useState } from 'react'
import SelectFetch from "./Components/SelectFetch"
import Label from "./Components/Label"
import fetchDefault from './axios/axiosConfig';

function FormApi() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedPlayers, setSelectedPlayers] = useState('');

  const mapFunction = (data) => ({
    id: data.id,
    label: data.name,
  });

  const mapFunctionLeague = (data) => ({
    id: data.league.id,
    label: data.league.name,
  });

  const mapFunctionTeams = (data) => ({
    id: data.team.id,
    label: data.team.name,
  });

  const mapFunctionSeasons = (data) => ({
    id: data,
    label: `${data}-${data + 1}`,
  });

  const handleCountry = (event) => {
    setSelectedCountry(event.target.value);
    console.log(event.target.value)
  };

  const handleLeague = (event) => {
    //Pegando indice do elemento selecionado para compor nova requisição de players.
    const selectedIndex = event.target.selectedIndex;
    const selectedLeagueId = event.target.options[selectedIndex].value;
    setSelectedLeague(selectedLeagueId);
  }

  const handleSeason = (event) => {
    setSelectedSeason(event.target.value)
  }

  const handleTeam = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedTeamId = event.target.options[selectedIndex].value;
    setSelectedTeam(selectedTeamId);
    console.log(selectedTeamId)

    async function fetchPlayers(teamId){
      try{
        const responseFetch = await fetchDefault(`/players/squads`)
        console.log(responseFetch.data.response)
        // setSelectedPlayers(responseFetch.data)
      }catch(error){
        console.log(error)
      }
    }
    if(selectedPlayers !== null){
       fetchPlayers(selectedTeamId);
    }
  }

  return (
    <section>
      <div className="flex flex-col gap-">
        <Label
          htmlFor="countrySelect"
          text="Selecione um País"
        />
        <SelectFetch
          idSelect="countrySelect"
          url="/countries"
          mapFunction={mapFunction}
          value={selectedCountry}
          onChange={handleCountry}
        />
      </div >

      {selectedCountry ? (
        <div className="flex flex-col gap-">
          <Label
            htmlFor="leagueSelect"
            text="Selecione uma Liga"
          />
          <SelectFetch
            idSelect="leagueSelect"
            url={`/leagues?country=${selectedCountry}`}
            mapFunction={mapFunctionLeague}
            value={selectedLeague}
            onChange={handleLeague}
          />
        </div>) : <p></p>}

      {selectedLeague ? (
        <div className="flex flex-col gap-">
          <Label
            htmlFor="seasonSelect"
            text="Selecione uma temporada:"
          />
          <SelectFetch
            idSelect="seasonSelect"
            url={`/leagues/seasons`}
            mapFunction={mapFunctionSeasons}
            value={selectedSeason}
            onChange={handleSeason}
          />
        </div>) : <p></p>}


      {selectedSeason ? (
        <div className="flex flex-col gap-">
          <Label
            htmlFor="TeamSelect"
            text="Selecione um time:"
          />
          <SelectFetch
            idSelect="TeamSelect"
            url={`/teams?league=${selectedLeague}&season=${selectedSeason}`}
            mapFunction={mapFunctionTeams}
            value={selectedTeam}
            onChange={handleTeam}
          />
        </div>) : <p></p>}
    </section>
  )
}

export default FormApi
