import React from 'react'
import Label from '../Label';
import SelectFetch from '../SelectFetch';
import { AppContext } from '@/app/AppContext';

function SeasonSelect() {
  const {selectedSeason, setSelectedSeason} = React.useContext(AppContext)

  const handleSeason = (event) => {
    setSelectedSeason(event.target.value)
  }

  const mapFunctionSeasons = (data) => ({
    id: data,
    label: `${data}-${data + 1}`,
  });

  return (
    <div className="flex flex-col w-full">
      <Label
        htmlFor="seasonSelect"
        text="Temporadas:"
      />
      <SelectFetch
        idSelect="seasonSelect"
        url={`/leagues/seasons`}
        mapFunction={mapFunctionSeasons}
        value={selectedSeason}
        onChange={handleSeason}
      />
    </div>
  )
}

export default SeasonSelect
