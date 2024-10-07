import React from 'react';
import Header from './Components/Header/Header.jsx';
import ProgressBar from './Components/ProgressBar/ProgressBar.jsx';
import TaskList from './Components/TaskList/TaskList';

function App() {
  return (
    <div className="App">
      <Header />
      <ProgressBar />
      <TaskList />
    </div>
  );
}

export default App;
