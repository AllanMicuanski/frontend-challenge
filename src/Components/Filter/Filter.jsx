// Filter.jsx
import React, { useState } from 'react';
import { FilterButton, FilterContainer } from './styles';

const Filter = ({ setFilter }) => {
  const [activeFilter, setActiveFilter] = useState('all'); // Estado para controle do filtro ativo

  const handleFilterChange = (filter) => {
    setActiveFilter(filter); // Atualiza o filtro ativo
    setFilter(filter); // Chama a função para atualizar o filtro
  };

  return (
    <FilterContainer>
      <FilterButton
        onClick={() => handleFilterChange('done')}
        style={{
          backgroundColor: activeFilter === 'done' ? '#5bc0de' : 'transparent',
        }}
      >
        Done
      </FilterButton>
      <FilterButton
        onClick={() => handleFilterChange('pending')}
        style={{
          backgroundColor:
            activeFilter === 'pending' ? '#5bc0de' : 'transparent',
        }}
      >
        Pending
      </FilterButton>
    </FilterContainer>
  );
};

export default Filter;
