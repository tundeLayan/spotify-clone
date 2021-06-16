import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext({});

export const DataLayer = ({ reducer, initialState, children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataLayerContext.Provider value={{ state, dispatch }}>
      {children}
    </DataLayerContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(DataLayerContext);
