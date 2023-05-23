'use client'

import { useState } from "react"

export default function Login() {
  const [keyApi, setKeyApi] = useState(null)

  return (
    <section className="flex-1 h-screen bg-zinc-800">
      <div className="flex flex-col gap-2">
        <label htmlFor="keyAccess" className="text-sm">Insira key para acesso:</label>
        <input type="text" name="keyAccess" id="keyAccess" className="w-60 bg-zinc-400 rounded-sm focus:outline-none px-2 py-0.5 text-zinc-900" value={keyApi} />
        <button type="submit" className="bg-green-600 w-24 mt-1 rounded-sm hover:bg-green-500">Enviar</button>
      </div>

    </section>
  )
}
