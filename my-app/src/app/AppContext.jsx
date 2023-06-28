import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');

  return (
    <AppContext.Provider
      value={{
        selectedCountry,
        setSelectedCountry,
        selectedLeague,
        setSelectedLeague,
        selectedSeason,
        setSelectedSeason,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};