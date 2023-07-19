import React, { useContext } from 'react'
import Label from '../Label';
import SelectFetch from '../SelectFetch';
import { AppContext } from '@/app/AppContext';


function CountrySelect() {
  const {selectedCountry, setSelectedCountry} = useContext(AppContext)

  function handleCountry(event) {
    setSelectedCountry(event.target.value);
  };

  const mapFunction = (data) => ({
    id: data.id,
    label: data.name,
  });

  return (
    <div className="flex flex-col w-full">
      <Label
        htmlFor="countrySelect"
        text="Países:"
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
