import React from 'react'
import fetchDefault from '../axios/axiosConfig';
import Button from './Button';
import CountrySelect from './FetchComp/CountrySelect';
import LeagueSelect from './FetchComp/LeagueSelect';
import SeasonSelect from './FetchComp/SeasonSelect';
import TeamSelect from './FetchComp/TeamSelect';
import { AppContext } from '../AppContext';

function FormApi() {
  const {
    selectedEstatitic,
    getPlayers,
    selectedPlayers,
    getGames,
    selectedGames,
    selectedTimeGoals,
    getTimeGoals
  } = React.useContext(AppContext)

  return (
    <section>
      <CountrySelect />
      <LeagueSelect />
      <SeasonSelect />
      <TeamSelect />

      <div>
        <div className="flex gap-2 mt-2">
          {/* <Button onClick={getLineUp} textView='Formação mais utilizada' /> */}
          <Button onClick={getPlayers} textView='Jogadores do time' />
          <Button onClick={getGames} textView='Estatísticas dos jogos' />
          <Button onClick={getTimeGoals} textView='Gols por tempo de jogo' />
        </div>
      </div>

      {selectedEstatitic === 'players' &&
        <>
          <h1 className="title-content">Todos os Jogadores da temporada:</h1>
          <ul className="mt-3">
            {selectedPlayers.map((player, index) => (
              <li key={index}>
                <ul className="grid grid-cols-5 gap-3">
                  {player.players.map((playerData, playerIndex) => (
                    <li key={playerIndex} className="border border-zinc-400 px-3 py-2 rounded-sm">
                      <p className="text-sm px-2">
                        <label className="text-zinc-300">Nome:</label> {' '}
                        {playerData.name}
                      </p>
                      <p className="text-sm px-2">
                        <label className="text-zinc-300">Idade:</label> {' '}
                        {playerData.age}
                      </p>
                      <p className="text-sm px-2">
                        <label className="text-zinc-300">Posição:</label> {' '}
                        {playerData.position}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </>}

      <>
        {selectedEstatitic === 'lineup' &&
          <article className="w-[300px]">
            <h1 className="title-content">Formação mais utilizada do time no campeonato</h1>
            <p className="p-2 border border-zinc-600 text-left">Formação: {lineupWithMaxPlayed}</p>
            <p className="p-2 border border-zinc-600 text-left">Partidas com formação: {lineupWithMaxPlayed} partidas</p>
          </article>
        }
      </>

      <>
        {selectedEstatitic === 'partidas' && selectedGames?.played ? (
          <article className="w-[300px]">
            <h3 className="title-content">Estatísticas de partidas</h3>
            <p className="p-2 border border-zinc-600 text-left">Total de partidas jogadas: {selectedGames.played.total} partidas</p>
            <p className="p-2 border border-zinc-600 text-left">Total de partidas ganhas: {selectedGames.wins.total} partidas</p>
            <p className="p-2 border border-zinc-600 text-left">Total de partidas empatadas: {selectedGames.draws.total} partidas</p>
            <p className="p-2 border border-zinc-600 text-left">Total de partidas perdidas: {selectedGames.loses.total} partidas</p>
          </article>
        ) : null}
      </>

      <>
        {selectedEstatitic === 'tempoGol' && selectedTimeGoals && (
          <article>
            <h3 className="title-content">Estatísticas de gols por tempo de jogo:</h3>
            {Object.entries(selectedTimeGoals).map(([interval, data]) => (
              <div key={interval} className="grid grid-cols-3 w-[600px]">
                <p className="p-2 border border-zinc-600 text-left">Intervalo: {interval} min</p>
                <p className="p-2 border border-zinc-600 text-center">Total de gols: {data.total}</p>
                <p className="p-2 border border-zinc-600 text-center">Porcentagem: {data.percentage}</p>
              </div>
            ))}
          </article>
        )}
      </>
    </section>
  )
}

export default FormApi
