import { useState, useEffect } from 'react'
import fetchDefault from '../axios/axiosConfig'

function Countries() {
  const [dataCountries, setDataCountries] = useState([])
  const [dataLeagues, setDataLeagues] = useState([])
  const [dataTeams, setDataTeams] = useState([])
  const [dataSeasons, setDataSeasons] = useState([])
  const [valueCountry, setValueCountry] = useState('')
  const [valueLeague, setValueLeague] = useState('')
  const [valueTeam, setValueTeam] = useState('')
  const [valueSeason, setValueSeason] = useState('')

  useEffect(() => {
    async function FetchCountries() {
      try {
        const fetchCountriesData = await fetchDefault.get('/countries')
        const dataFetch = await fetchCountriesData.data.response;
        setDataCountries(dataFetch)

      } catch (error) {
        console.log(error)
      }
    }
    FetchCountries()
  }, [])

  async function handleCountry(event) {
    const selectedCountry = event.target.value;
    setValueCountry(selectedCountry);
    // console.log(selectedCountry);

    async function FetchLeagues(countryId) {
      try {
        const responseLeague = await fetchDefault(`/leagues?country=${countryId}`);
        setDataLeagues(responseLeague.data.response);
      } catch (error) {
        // Manipule erros da requisição
        console.error(error);
      }
    }
    if (selectedCountry !== null) {
      FetchLeagues(selectedCountry);
    }
  }

  async function handleLeague(event) {
    const selectedLeague = event.target.value;
    setValueLeague(selectedLeague)
    async function FetchSeasons(SeasonId) {
      try {
        const responseSeason = await fetchDefault('/leagues/seasons');
        setDataSeasons(responseSeason.data.response);
      } catch (error) {
        // Manipule erros da requisição
        console.error(error);
      }
    }
    if (selectedLeague !== null) {
      FetchSeasons(selectedLeague);
    }
  }

  function handleSeason(event) {
    const selectedSeason = event.target.value
    setValueSeason(selectedSeason)
    async function FetchTeams(teamId) {
      try {
        const responseTeams = await fetchDefault(`/teams?league=${valueLeague}`);
        setDataTeams(responseTeams.data.response);
      } catch (error) {
        // Manipule erros da requisição
        console.error(error);
      }
    }
    if (selectedSeason !== null) {
      FetchTeams(selectedSeason);
    }
  }

  function handleTeams(event) {
    console.log(event.target.value)
    setValueTeam(event.target.value)
  }

  return (
    <section className="flex flex-col gap-2">

      { /* Component País*/}
      <div className="flex flex-col gap-1">
        <label className="text-sm">Selecione um Páis:</label>
        <select value={valueCountry} onChange={handleCountry} className="w-[280px] bg-zinc-400 rounded-sm focus:outline-none px-2 py-0.5 text-zinc-900">
          {dataCountries.map((country, index) => (
            <option className="text-black" key={index} value={country.id}>{country.name}</option>
          ))}
        </select>
      </div>

      { /* Component Liga*/}
      {valueCountry ? (
        <div className="flex flex-col gap-1">
          <label className="text-sm">Selecione um Liga:</label>
          <select value={valueLeague} onChange={handleLeague} className="w-[280px] bg-zinc-400 rounded-sm focus:outline-none px-2 py-0.5 text-zinc-900">
            {dataLeagues.map((league, index) => (
              <option className="text-black" key={index} value={league.league.id}>{league.league.name}</option>
            ))}
          </select>
        </div>
      ) : <p></p>}

      { /* Component Ano*/}
      {valueLeague ? (
        <div className="flex flex-col gap-1">
          <label className="text-sm">Selecione uma temporada para visualizar os times:</label>
          <select value={valueSeason} onChange={handleSeason} className="w-[280px] bg-zinc-400 rounded-sm focus:outline-none px-2 py-0.5 text-zinc-900">
            {dataSeasons.map((season, index) => (
              <option className="text-black" key={index} value={season.value}>{season}</option>
            ))}
          </select>
        </div>
      ) : <p></p>}

      { /* Component Times*/}
      {valueSeason ? (
        <div className="flex flex-col gap-1">
          <label className="text-sm">Selecione um time dessa liga:</label>
          <select value={valueTeam} onChange={handleTeams} className="w-[280px] bg-zinc-400 rounded-sm focus:outline-none px-2 py-0.5 text-zinc-900">
            {dataTeams.map((team, index) => (
              <option className="text-black" key={index} value={team.id}>{team.team.name}</option>
            ))}
          </select>
        </div>
      ) : <p></p>}

    </section>
  )
}

export default Countries
