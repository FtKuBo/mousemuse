
import React, { createContext, useState, useContext } from 'react';

const FilterContext = createContext();

export const useFilter = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'All',
    size: 'All',
  });

  const updateFilters = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const initializeFilters = (initialState) => {
    const newFilters = { ...filters, ...initialState };
    // Only update if the new state is different from the current state
    if (newFilters.category !== filters.category || newFilters.size !== filters.size) {
      setFilters(newFilters);
    }
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilters, initializeFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
