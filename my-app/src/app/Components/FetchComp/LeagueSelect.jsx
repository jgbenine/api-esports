import React from 'react'
import SelectFetch from '../SelectFetch';
import Label from '../Label';
import { AppContext } from '@/app/AppContext';

function LeagueSelect() {
  const {selectedCountry, selectedLeague, setSelectedLeague } = React.useContext(AppContext)

  function handleLeague(event){
    const selectedIndex = event.target.selectedIndex;
    const selectedLeagueId = event.target.options[selectedIndex].value;
    setSelectedLeague(selectedLeagueId);
  }
  const mapFunctionLeague = (data) => ({
    id: data.league.id,
    label: data.league.name,
  });

  return (
    <div className="flex flex-col w-full">
      <Label
        htmlFor="leagueSelect"
        text="Ligas:"
      />
      <SelectFetch
        idSelect="leagueSelect"
        url={`/leagues?country=${selectedCountry}`}
        mapFunction={mapFunctionLeague}
        value={selectedLeague}
        onChange={handleLeague}
      />
    </div>
  )
}

export default LeagueSelect
