import React, { createContext, useState, useContext } from 'react';
import { allProducts } from '../data/products'; // Import your product data

const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const performSearch = (query) => {
    setSearchTerm(query);
    if (!query) {
      setSearchResults([]);
      return;
    }
    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const value = { searchTerm, searchResults, performSearch };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  return useContext(SearchContext);
};