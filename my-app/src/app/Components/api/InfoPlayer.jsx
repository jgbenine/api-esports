import React from "react";
import { AppContext } from "@/app/AppContext";
import Loading from "../Loading";

function InfoPlayer() {
  const { infoPlayer, selectedSeason } = React.useContext(AppContext);
  return (
    <section>
      <h1 className="title-content">Informações do Jogador em {selectedSeason}:</h1>
      {infoPlayer ? (
        <ul className="flex gap-4">
          {infoPlayer.map((playerInfo, index) => (
            <li key={index} className="flex gap-3">
              <span>
                <img
                  src={playerInfo.player.photo}
                  alt="Avatar jogador"
                  className="rounded-xl"
                />
              </span>
              <div className="flex flex-col gap-2 justify-between">
                <p className="flex gap-1 items-center text-sm">
                  <label className="text-amber-200">Nome:</label>
                  {playerInfo.player.name}
                </p>
                <p className="flex gap-1 items-center text-sm">
                  <label className="text-amber-200">Idade:</label>
                  {playerInfo.player.age} Anos
                </p>
                <p className="flex gap-1 items-center text-sm">
                  <label className="text-amber-200">Altura:</label>
                  {playerInfo.player.height}
                </p>
                <p className="flex gap-1 items-center text-sm">
                  <label className="text-amber-200">Peso:</label>
                  {playerInfo.player.weight}
                </p>
                <div className="flex gap-1 items-center text-sm">
                  <label className="text-amber-200">Nacionalidade:</label>
                  <p className="flex gap-1">
                    <span>{playerInfo.player.nationality}</span>/
                    <span>{playerInfo.player.birth.place}</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
          {infoPlayer.map((infoStatistic) => {
            const statisticsArray = infoStatistic.statistics[0];
            // const lastStatistic = statisticsArray[statisticsArray.length - 1];
            return (
              <div className="flex gap-4">
                <span>
                  <img
                    src={statisticsArray.team.logo}
                    alt="Avatar jogador"
                    className="rounded-xl"
                  />
                </span>
                <div className="flex flex-col gap-2">
                <li className="flex gap-1">
                  <label className="text-amber-200 text-sm">Time:</label>
                  <p className="flex gap-1 text-sm">
                    <span>{statisticsArray.team.name}</span>
                  </p>
                </li>
                <li className="flex gap-1">
                  <label className="text-amber-200 text-sm">Posição:</label>
                  <p className="flex gap-1 text-sm">
                    <span>{statisticsArray.games.position}</span>
                  </p>
                </li>
                <li className="flex gap-1">
                  <label className="text-amber-200 text-sm">Totais de Jogos:</label>
                  <p className="flex gap-1 text-sm">
                    <span>{statisticsArray.duels.total} Jogos</span>
                  </p>
                </li>
                <li className="flex gap-1">
                  <label className="text-amber-200 text-sm">Jogos ganhos:</label>
                  <p className="flex gap-1 text-sm">
                    <span>{statisticsArray.duels.won} Jogos</span>
                  </p>
                </li>
                <li className="flex gap-1">
                  <label className="text-amber-200 text-sm">Avaliação:</label>
                  <p className="flex gap-1 text-sm">
                    <span>{statisticsArray.games.rating}</span>
                  </p>
                </li>
              </div>
              </div>
            );
          })}
        </ul>
      ) : (
        <Loading />
      )}
    </section>
  );
}

export default InfoPlayer;
