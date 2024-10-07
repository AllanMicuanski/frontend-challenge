import React from 'react';
import { SearchInput } from './styles';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <SearchInput
      type="text"
      placeholder="Buscar itens"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
