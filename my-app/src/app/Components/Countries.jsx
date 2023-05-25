import { useState, useEffect } from 'react'
import fetchDefault from '../axios/axiosConfig'

function Countries() {
  const [dataCountries, setDataCountries] = useState([])
  const [valueSelect, setValueSelect] = useState('')

  useEffect(() => {
    async function FetchCountries() {
      try {
        const fetchResponse = await fetchDefault('/countries', {
          headers: {
            "x-rapidapi-key": "a3663050d10164fbaa3d5c0e5ff68f3a",
            "x-rapidapi-host": "v1.basketball.api-sports.io"
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
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm">Selecione um Páis:</label>
      <select value={valueSelect} onChange={handleChange} className="w-[280px] bg-zinc-400 rounded-sm focus:outline-none px-2 py-0.5 text-zinc-900">
        {dataCountries.map(item => (
          <option key={item.id} value={item.id} >{item.name}</option>
        ))}
      </select>
    </div>
  )
}

export default Countries
