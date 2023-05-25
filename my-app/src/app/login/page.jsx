'use client'
import axios from "axios"
import { useState } from "react"
import Countries from "../routes/Countries"
export default function Login() {
  const [inputKey, setInput] = useState('')
  const [infoLogin, setInfoLogin] = useState([''])

    async function handleSubmit(event) {
      event.preventDefault()
      try {
        const fetchResponse = await axios.get('https://v1.basketball.api-sports.io/status', {
          headers: {
            "x-rapidapi-key": inputKey,
            "x-rapidapi-host": "v1.basketball.api-sports.io"
          }
        })
        const dataFetch = await fetchResponse.data.results;
        setInfoLogin(dataFetch)
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <section className="flex-1 h-screen bg-zinc-800 gap-3">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="keyAccess" className="text-sm">Insira key para acesso:</label>
        <input
          className="w-[280px] bg-zinc-400 rounded-sm focus:outline-none px-2 py-0.5 text-zinc-900"
          type="text"
          name="keyAccess"
          id="keyAccess"
          value={inputKey}
          onChange={({ target }) => setInput(target.value)} />
        <button type="submit" className="bg-green-600 w-24 mt-1 rounded-sm hover:bg-green-500">Enviar</button>
        {infoLogin === 0 ? (<p className="text-[0.7rem] text-red-600">Key Inválido</p>) : 
          infoLogin === 1 ? (<Countries/> ) 
         : (<p></p>)}
      </form>
    </section>
  )
}
