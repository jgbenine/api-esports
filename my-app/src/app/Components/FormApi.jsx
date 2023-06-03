import { useEffect, useState } from 'react'
import SelectFetch from "./SelectFetch"
import Label from "./Label"
import fetchDefault from '../axios/axiosConfig';

function FormApi() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [selectedLineUp, setselectedLineUp] = useState([]);
  const [selectedGames, setselectedGames] = useState([]);

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
  }

  //OBTER PLAYERS FETCH
  // function clickPlayers() {
  //   async function fetchPlayers(teamId) {
  //     try {
  //       const responseFetch = await fetchDefault(`/players/squads?team=127`)
  //       const players = responseFetch.data.response;
  //       console.log("players:" + players)
  //       setSelectedPlayers(players)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   if (selectedPlayers !== null) {
  //     fetchPlayers('127')
  //   }
  //   console.log('ok')
  // }

  /**LINE UP INFO */
  function getLineUp() {
    async function fetchLineUps(teamId) {
      try {
        const responseFetch = await fetchDefault(`/teams/statistics?season=2022&team=127&league=73`)
        const lineUps = responseFetch.data.response.lineups;
        setselectedLineUp(lineUps)
      } catch (error) {
        console.log(error)
      }
    }
    if (selectedLineUp !== null) {
      fetchLineUps('127')
    }
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


  //INFO JOGOS
  function getGames() {
    console.log('get Games')
    async function fetchGames(teamId) {
      try {
        const responseFetch = await fetchDefault(`/teams/statistics?season=2022&team=127&league=73`)
        const games = responseFetch.data.response.fixtures;
        console.log(games)
        setselectedGames(games)
      } catch (error) {
        console.log(error)
      }
    }
    if (selectedGames !== null) {
      fetchGames('127')
    }
  }


  return (
    <section>
      {/* <div className="flex flex-col gap-">
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
      </div > */}

      {/* {selectedCountry ? (
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
        </div>) : <p></p>} */}

      {/* {selectedLeague ? (
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
        </div>) : <p></p>} */}



      <div className="flex flex-col gap-">
        <Label
          htmlFor="TeamSelect"
          text="Selecione um time:"
        />
        <SelectFetch
          idSelect="TeamSelect"
          url={`/teams?league=73&season=13`}
          mapFunction={mapFunctionTeams}
          value={selectedTeam}
          onChange={handleTeam}
        />
      </div>

      {/* <button onClick={clickPlayers}>Obter players</button> */}
      {/* <button onClick={getLineUp}>Obter LineUp</button> */}
      <button onClick={getGames}>Obter Jogos</button>
      {/* <div>
        <ul className="mt-3">
          {selectedPlayers.map((player, index) => (
            <li key={index}>
              <ul className="grid grid-cols-5 gap-3">
                {player.players.map((playerData, playerIndex) => (
                  console.log(player),
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
      </div> */}

      <div>
        {lineupWithMaxPlayed ? (
          <div>
            <h1>Formação mais utilizada</h1>
            <p>Formação: {lineupWithMaxPlayed.formation}</p>
            <p>Jogos: {lineupWithMaxPlayed.played}</p>
          </div>
        ) : null}
      </div>

    </section>
  )
}

export default FormApi
