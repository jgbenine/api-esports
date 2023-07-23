import { AppContext } from '@/app/AppContext'
import React from 'react'

function GoalsByGameTime() {
  const { selectedTimeGoals } = React.useContext(AppContext)

  return (
    <article className="w-full">
      <h3 className="title-content">Estatísticas de gols por tempo de jogo:</h3>
      {Object.entries(selectedTimeGoals).map(([interval, data]) => (
        <div key={interval} className="grid grid-cols-3 w-[600px]">
          <p className="p-2 border border-zinc-600 text-left">Intervalo: {interval} min</p>
          <p className="p-2 border border-zinc-600 text-center">Total de gols: {data.total}</p>
          <p className="p-2 border border-zinc-600 text-center">Porcentagem: {data.percentage}</p>
        </div>
      ))}
    </article>
  )
}

export default GoalsByGameTime
