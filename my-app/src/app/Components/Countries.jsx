import { useState, useEffect } from 'react'
import fetchDefault from '../axios/axiosConfig'

function Countries() {
  const [dataCountries, setDataCountries] = useState([])
  const [dataLeagues, setDataLeagues] = useState([])
  const [valueSelect, setValueSelect] = useState('')

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


  function handleChange(event) {
    console.log(event.target.value)
    setValueSelect(event.target.value);
      async function FetchLeagues() {
        try {
          const fetchResponse = await fetchDefault.get(`/leagues?country_id=${valueSelect}`, {
            headers: {
              "x-rapidapi-key": "a3663050d10164fbaa3d5c0e5ff68f3a",
              "x-rapidapi-host": "v1.baseball.api-sports.io"
            },
          })
          const dataFetch = await fetchResponse.data.response;
          console.log(dataFetch)
          setDataLeagues(dataFetch)
        } catch (error) {
          console.log(error)
        }
      }
      FetchLeagues()
  }

  return (
    <section className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label className="text-sm">Selecione um Páis:</label>
        <select value={valueSelect} onChange={handleChange} className="w-[280px] bg-zinc-400 rounded-sm focus:outline-none px-2 py-0.5 text-zinc-900">
          {dataCountries.map(country => (
            <option key={country.id} value={country.id} >{country.name}</option>
          ))}
        </select>
      </div>

      {valueSelect ? (
        <div className="flex flex-col gap-1">
        <select className="w-[280px] bg-zinc-400 rounded-sm focus:outline-none px-2 py-0.5 text-zinc-900">
          {dataLeagues.map(league => (
            <option key={league.id} value={league.id}>{league.name}</option>
          ))}
        </select>
      </div>
      ) : <p></p> }

    </section>
  )
}

export default Countries
