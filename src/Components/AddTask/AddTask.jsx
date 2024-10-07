import React, { useState } from 'react';
import { InputContainer, AddButton } from './styles';

const AddTask = ({ onAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAdd(newTask); // Chama a função para adicionar a tarefa
      setNewTask(''); // Limpa o campo de entrada
    }
  };

  return (
    <InputContainer>
      <input
        type="text"
        placeholder="Adicionar nova tarefa..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <AddButton onClick={handleAddTask}>+</AddButton>
    </InputContainer>
  );
};

export default AddTask;
