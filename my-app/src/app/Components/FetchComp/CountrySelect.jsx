import React, { useContext } from 'react'
import Label from '../Label';
import SelectFetch from '../SelectFetch';
import { AppContext } from '@/app/AppContext';


function CountrySelect() {
  // const [selectedCountry, setSelectedCountry] = React.useState('');
  const {selectedCountry, setSelectedCountry} = useContext(AppContext)

  function handleCountry(event) {
    setSelectedCountry(event.target.value);
  };

  const mapFunction = (data) => ({
    id: data.id,
    label: data.name,
  });

  return (
    <div className="flex flex-col">
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
  )
}

export default CountrySelect
