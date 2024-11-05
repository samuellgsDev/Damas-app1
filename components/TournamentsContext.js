import React, { createContext, useState } from 'react';

// Criar o contexto
export const TournamentsContext = createContext();

// Componente provider
export const TournamentsProvider = ({ children }) => {
  const [addedTournaments, setAddedTournaments] = useState([]);

  // Função para adicionar um torneio
  const addTournament = (tournament) => {
    setAddedTournaments((prevTournaments) => [...prevTournaments, tournament]);
  };

  return (
    <TournamentsContext.Provider value={{ addedTournaments, addTournament }}>
      {children}
    </TournamentsContext.Provider>
  );
};
