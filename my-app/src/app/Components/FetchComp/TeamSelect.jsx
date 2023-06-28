import React from 'react'
import Label from '../Label';
import SelectFetch from '../SelectFetch';

function TeamSelect({selectedLeague, selectedSeason}) {
  const [selectedTeam, setSelectedTeam] = React.useState('');

  const url = `/teams?league=${selectedLeague}&season=${selectedSeason}`;

  function handleTeam(event){
    const selectedIndex = event.target.selectedIndex;
    const selectedTeamId = event.target.options[selectedIndex].value;
    setSelectedTeam(selectedTeamId);
  }

  const handleLeague = (selectedLeague) => {
    setSelectedLeague(selectedLeague);
  };

  const mapFunctionTeams = (data) => ({
    id: data.team.id,
    label: data.team.name,
  });

  return (
    <div className="flex flex-col gap-">
      <Label
        htmlFor="TeamSelect"
        text="Selecione um time:"
      />
      <SelectFetch
        idSelect="TeamSelect"
        url={url}
        mapFunction={mapFunctionTeams}
        value={selectedTeam}
        onChange={handleTeam}
      />

      
    </div>
  )
}

export default TeamSelect
