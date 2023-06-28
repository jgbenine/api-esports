import React from 'react'
import Label from '../Label';
import SelectFetch from '../SelectFetch';
import TeamSelect from './TeamSelect';

function SeasonSelect() {
  const [selectedSeason, setSelectedSeason] = React.useState('');
  const [selectedLeague, setSelectedLeague] = React.useState('');

  const handleSeason = (event) => {
    setSelectedSeason(event.target.value)
  }

  const handleLeague = (selectedLeague) => {
    setSelectedLeague(selectedLeague);
  };

  const mapFunctionSeasons = (data) => ({
    id: data,
    label: `${data}-${data + 1}`,
  });

  return (
    <div className="flex flex-col">
      <Label
        htmlFor="seasonSelect"
        text="Selecione uma temporada:"
      />
      <SelectFetch
        idSelect="seasonSelect"
        url={`/leagues/seasons`}
        mapFunction={mapFunctionSeasons}
        value={selectedSeason}
        onChange={handleSeason}
      />

      <TeamSelect selectedLeague={selectedLeague} selectedSeason={selectedSeason} />
    </div>
  )
}

export default SeasonSelect
