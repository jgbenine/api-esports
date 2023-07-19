import React from 'react'
import Label from '../Label';
import SelectFetch from '../SelectFetch';
import { AppContext } from '@/app/AppContext';

function TeamSelect() {
  const {selectedLeague, selectedSeason , selectedTeam, setSelectedTeam} = React.useContext(AppContext)

  function handleTeam(event){
    const selectedIndex = event.target.selectedIndex;
    const selectedTeamId = event.target.options[selectedIndex].value;
    setSelectedTeam(selectedTeamId);
  }

  const mapFunctionTeams = (data) => ({
    id: data.team.id,
    label: data.team.name,
  });

  return (
    <div className="flex flex-col w-full">
      <Label
        htmlFor="TeamSelect"
        text="Times:"
      />
      <SelectFetch
        idSelect="TeamSelect"
        url={`/teams?league=${selectedLeague}&season=${selectedSeason}`}
        mapFunction={mapFunctionTeams}
        value={selectedTeam}
        onChange={handleTeam}
      />
    </div>
  )
}

export default TeamSelect
