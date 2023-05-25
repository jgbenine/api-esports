import { useState, useEffect } from 'react'
import fetchDefault from '../axios/axiosConfig'

function Countries() {
  const [dataCountries, setDataCountries] = useState([])
  const [dataLeagues, setDataLeagues] = useState([])
  const [valueCountry, setValueCountry] = useState('')
  const [valueLeague, setValueLeague] = useState('')

  useEffect(() => {
    async function FetchCountries() {
      try {
        const fetchResponse = await fetchDefault.get('/countries', {
          headers: {
            "x-rapidapi-key": "a3663050d10164fbaa3d5c0e5ff68f3a",
            "x-rapidapi-host": "v1.baseball.api-sports.io"
          }
        })
        const dataFetch = await fetchResponse.data.response;
        setDataCountries(dataFetch)
      } catch (error) {
        console.log(error)
      }
    }
    FetchCountries()
  }, [])


  function handleCountry(event) {
    console.log(event.target.value)
    setValueCountry(event.target.value);
    async function FetchLeagues() {
      try {
        const fetchResponse = await fetchDefault.get(`/leagues?country_id=${valueCountry}`, {
          headers: {
            "x-rapidapi-key": "a3663050d10164fbaa3d5c0e5ff68f3a",
            "x-rapidapi-host": "v1.baseball.api-sports.io"
          },
        })
        const dataFetch = await fetchResponse.data.response;
        setDataLeagues(dataFetch)
        console.log(dataFetch)
      } catch (error) {
        console.log(error)
      }
    }
    FetchLeagues()
  }

  function handleLeague(event){
    console.log(event.target.value)
    setValueLeague(event.target.value)
    // handleLeague();
  }

  return (
    <section className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label className="text-sm">Selecione um Páis:</label>
        <select value={valueCountry} onChange={handleCountry} className="w-[280px] bg-zinc-400 rounded-sm focus:outline-none px-2 py-0.5 text-zinc-900">
          {dataCountries.map(country => (
            <option key={country.id} value={country.id} >{country.name}</option>
          ))}
        </select>
      </div>

      {valueCountry ? (
        <div className="flex flex-col gap-1">
          <label className="text-sm">Selecione um Liga:</label>
          <select value={valueLeague} onChange={handleLeague} className="w-[280px] bg-zinc-400 rounded-sm focus:outline-none px-2 py-0.5 text-zinc-900">
            {dataLeagues.map(league => (
              <option key={league.id} value={league.name}>{league.name}</option>
            ))}
          </select>
        </div>
      ) : <p></p>}

    </section>
  )
}

export default Countries
