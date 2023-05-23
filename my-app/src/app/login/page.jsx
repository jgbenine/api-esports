'use client'

import { useState } from "react"
export default function Login() {
  const [keyApi, setKeyApi] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", keyApi);
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      // redirect: 'follow'
    };

    fetch("https://v3.football.api-sports.io/status", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    console.log({
      keyApi
    })
  }

  return (
    <section className="flex-1 h-screen bg-zinc-800">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="keyAccess" className="text-sm">Insira key para acesso:</label>
        <input
          className="w-[280px] bg-zinc-400 rounded-sm focus:outline-none px-2 py-0.5 text-zinc-900"
          type="text"
          name="keyAccess"
          id="keyAccess"
          value={keyApi}
          onChange={({ target }) => setKeyApi(target.value)} />
        <button type="submit" className="bg-green-600 w-24 mt-1 rounded-sm hover:bg-green-500">Enviar</button>
      </form>

    </section>
  )
}
