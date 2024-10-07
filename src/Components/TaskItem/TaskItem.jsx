// TaskItem.jsx
import React, { useState } from 'react';
import { Tooltip, TaskContainer, Button } from './styles';

const TaskItem = ({ task, onComplete, onDelete }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isActive, setIsActive] = useState(false); // Adicionando estado para o background

  const handleClick = () => {
    setShowTooltip(!showTooltip); // Alterna a exibição do tooltip
    setIsActive(!isActive); // Alterna o estado ativo para o background
  };

  return (
    <TaskContainer
      onClick={handleClick}
      style={{ backgroundColor: isActive ? '#FFFFFF' : '#F4F4F4' }} // Altera a cor de fundo
    >
      {showTooltip && <Tooltip>Edit Task</Tooltip>}
      <input type="checkbox" checked={task.completed} onChange={onComplete} />
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.text}
      </span>
      <div>
        <Button onClick={onDelete} style={{ backgroundColor: 'red' }}>
          -
        </Button>
        <Button onClick={onComplete} style={{ backgroundColor: 'green' }}>
          +
        </Button>
      </div>
    </TaskContainer>
  );
};

export default TaskItem;
