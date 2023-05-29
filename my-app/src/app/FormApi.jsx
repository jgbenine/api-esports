import { useState } from 'react'
import SelectFetch from "./Components/SelectFetch"
import Label from "./Components/Label"

function FormApi() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');

  const mapFunction = (data) => ({
    id: data.id,
    label: data.name,
  });

  const mapFunctionSeasons = (data) => ({
    id: data,
    label: `${data}-${data + 1}`,
  });

  const handleCountry = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleLeague = (event) => {
    setSelectedLeague(event.target.value)
  }

  const handleSeason = (event) => {
    setSelectedSeason(event.target.value)
  }

  const handleTeam = (event) => {
    setSelectedTeam(event.target.value)
    console.log(selectedTeam)
  }

  return (
    <section>
      <div className="flex flex-col gap-">
        <Label
          htmlFor="countrySelect"
          text="Selecione um País"
        />
        <SelectFetch
          idSelect="countrySelect"
          url="/countries"
          mapFunction={mapFunction}
          value={selectedCountry}
          onChange={handleCountry}
        />
      </div >

      {selectedCountry ? (
        <div className="flex flex-col gap-">
          <Label
            htmlFor="leagueSelect"
            text="Selecione uma Liga"
          />
          <SelectFetch
            idSelect="leagueSelect"
            url={`/leagues?country_id=${selectedCountry}`}
            mapFunction={mapFunction}
            value={selectedLeague}
            onChange={handleLeague}
          />
        </div>) : <p></p>}

      {selectedLeague ? (
        <div className="flex flex-col gap-">
          <Label
            htmlFor="seasonSelect"
            text="Selecione uma temporada:"
          />
          <SelectFetch
            idSelect="seasonSelect"
            url={`/seasons`}
            mapFunction={mapFunctionSeasons}
            value={selectedSeason}
            onChange={handleSeason}
          />
        </div>) : <p></p>}


      {selectedSeason ? (
        <div className="flex flex-col gap-">
          <Label
            htmlFor="TeamSelect"
            text="Selecione um time:"
          />
          <SelectFetch
            idSelect="TeamSelect"
            url={`/teams?league=${selectedLeague}&season=${selectedSeason}`}
            mapFunction={mapFunction}
            value={selectedTeam}
            onChange={handleTeam}
          />
        </div>) : <p></p>}
    </section>
  )
}

export default FormApi
