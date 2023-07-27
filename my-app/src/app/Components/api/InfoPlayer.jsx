import React from "react";
import { AppContext } from "@/app/AppContext";

function InfoPlayer() {
  const { infoPlayer } = React.useContext(AppContext);
  console.log(infoPlayer);

  return (
    <section>
      <h1 className="title-content">Informações do Jogador:</h1>
      {infoPlayer ? (
        <ul>
          {infoPlayer.map((playerInfo, index) => (
            <li key={index} className="flex gap-3">
              <span>
                <img src={playerInfo.player.photo} alt="Avatar jogador" className="rounded-xl" />
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
                <p className="flex gap-1 items-center text-sm">
                  <label className="text-amber-200">Nacionalidade:</label>
                  <div className="flex gap-1">
                    <span>{playerInfo.player.nationality}</span>/
                    <span>{playerInfo.player.birth.place}</span>
                  </div>
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>teste</p>
      )}
    </section>
  );
}

export default InfoPlayer;
