import { AppContext } from '@/app/AppContext'
import React from 'react'

function LineupTeam() {
  const {lineupWithMaxPlayed} = React.useContext(AppContext)

  return (
    <article className="w-full">
      <h1 className="title-content">Formação mais utilizada do time no campeonato</h1>
      <p className="p-2 border border-zinc-600 text-left">Formação: {lineupWithMaxPlayed}</p>
      <p className="p-2 border border-zinc-600 text-left">Partidas com formação: {lineupWithMaxPlayed} partidas</p>
    </article>
  )
}

export default LineupTeam
