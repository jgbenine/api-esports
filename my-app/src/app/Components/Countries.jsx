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
        const fetchCountriesData = await fetchDefault.get('/countries')
        const dataFetch = await fetchCountriesData.data.response;
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
    console.log(`value contry:${valueCountry}`)


    async function FetchLeagues() {
      fetchDefault(`/leagues?country_id=${valueCountry}`)
      .then(function (responseLeague) {
        setDataLeagues(responseLeague.data.response)
        console.log(responseLeague.data.response);
      })
      .catch(function(error) {
        // manipula erros da requisição
        console.error(error);
      })
    }

  //  async  function antiga(){
  //     try {
  //       const fetchLeagueData = await fetchDefault.get(`/leagues`)
  //       const dataFetchLeagues = await fetchLeagueData.data.response;
  //       console.log(dataFetchLeagues)
  //       setDataLeagues(dataFetchLeagues)
        
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
    FetchLeagues()
  }

  function handleLeague(event){
    console.log('action function')
    console.log(event.target.value)
    // setValueLeague(event.target.value)
    // handleLeague();
  }

  return (
    <section className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label className="text-sm">Selecione um Páis:</label>
        <select value={valueCountry} onChange={handleCountry} className="w-[280px] bg-zinc-400 rounded-sm focus:outline-none px-2 py-0.5 text-zinc-900">
          {dataCountries.map((country, index) => (
            <option className="text-black" key={index} value={country.id}>{country.name}</option>
          ))}
        </select>
      </div>

      {valueCountry ? (
        <div className="flex flex-col gap-1">
          <label className="text-sm">Selecione um Liga:</label>
          <select value={valueLeague} onChange={handleLeague} className="w-[280px] bg-zinc-400 rounded-sm focus:outline-none px-2 py-0.5 text-zinc-900">
          {dataLeagues.map((league) => (
            <option className="text-black" key={league.id} value={league.id}>{league.name}teste</option>
          ))}
          </select>
        </div>
      ) : <p></p>}

    </section>
  )
}

export default Countries
