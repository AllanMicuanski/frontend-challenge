// TaskList.jsx
import React, { useState } from 'react';
import Filter from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';
import AddTask from '../AddTask/AddTask';
import TaskItem from '../TaskItem/TaskItem';
import { Container } from './styles';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(), // Gera um ID único
      text: taskText, // Texto da tarefa
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task,
      ),
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.text && task.text.toLowerCase().includes(searchTerm.toLowerCase());
    if (filter === 'done') return task.completed && matchesSearch;
    if (filter === 'pending') return !task.completed && matchesSearch;
    return matchesSearch; // 'all' ou nenhum filtro
  });

  const handleFilterChange = (newFilter) => {
    // Se o filtro atual é o mesmo que o novo, desmarque-o
    setFilter((prevFilter) => (prevFilter === newFilter ? 'all' : newFilter));
  };

  return (
    <Container>
      <Filter setFilter={handleFilterChange} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddTask onAdd={addTask} />

      {/* Verifica se o filtro é 'done' e se não há tarefas filtradas */}
      {filter === 'done' && filteredTasks.length === 0 ? (
        <p>
          There are no items marked as done.{' '}
          <span
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => {
              setFilter('all'); // Altera o filtro para 'all' quando clicado
            }}
          >
            Clear the filter here
          </span>{' '}
          to see all items.
        </p>
      ) : filter === 'pending' && filteredTasks.length === 0 ? (
        <p>
          There are no items marked as pending.{' '}
          <span
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => {
              setFilter('all'); // Altera o filtro para 'all' quando clicado
            }}
          >
            Clear the filter here
          </span>{' '}
          to see all items.
        </p>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={() => completeTask(task.id)}
            onDelete={() => deleteTask(task.id)}
          />
        ))
      )}
    </Container>
  );
};

export default TaskList;
