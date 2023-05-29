'use client'
import { useState } from "react"
import fetchDefault from "./axios/axiosConfig"
import Countries from "./Components/Countries"
import SelectFetch from "./Components/SelectFetch"

export default function Home() {
  // const [inputKey, setInput] = useState('')
  // const [infoLogin, setInfoLogin] = useState([''])
  const [selectedOption, setSelectedOption] = useState('');

  const mapFunction = (data) => ({
    id: data.id,
    label: data.name,
  });

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };


  // async function handleSubmit(event) {
  //   event.preventDefault()
  //   try {
  //     const fetchResponse = await fetchDefault('/status', {
  //       headers: {
  //         "x-rapidapi-key": inputKey,
  //       }
  //     })
  //     const dataFetch = await fetchResponse.data.results;
  //     setInfoLogin(dataFetch)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <section className="flex flex-col flex-1 h-screen bg-zinc-800 gap-3">
      {/* <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="keyAccess" className="text-sm">Insira key para acesso:</label>
          <input
            className="w-[280px] rounded-sm focus:outline-none bg-zinc-400 px-2 py-0.5 text-zinc-900"
            type="text"
            name="keyAccess"
            id="keyAccess"
            value={inputKey}
            onChange={({ target }) => setInput(target.value)}
          />
          <button type="submit" className="bg-green-600 w-24 mt-1 rounded-sm hover:bg-green-500">Acessar</button>
        </div>
        {infoLogin === 0 ? (<p className="text-[0.7rem] text-red-600">Key Inválido</p>) :
          infoLogin === 1 ? (<Countries />)
            : (<p></p>)}
      </form> */}

      <div className="flex flex-col w-60">
        <label>Selecione Pais</label>
        <SelectFetch
            url="/countries"
            mapFunction={mapFunction}
            value={selectedOption}
            onChange={handleSelectChange}
        />
        <p>Option select: {selectedOption}</p>
      </div >
    </section>

  )
}
