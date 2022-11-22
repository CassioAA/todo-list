import { useState} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

let initialState = [
  {
    id : 1,
    priority : '1',
    title : "title",
    description : "First Task"
  },
  {
    id : 2,
    priority : '3',
    title : "title",
    description : "Second Task"
  }
]

function App() {
  const [tasks, setTasks] = useState(initialState)

  function addTask(e) {
    e.preventDefault();
    const task = {
      id: document.getElementById('id').value,
      priority: document.getElementById('priority').value,
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
    };

    setTasks( [ ...tasks, {...task}] );

  }

  function deleteTask(id) {
    // e.preventDefault();
    const filteredTasks = tasks.filter(
      t => t.id !== id
    );
    setTasks( [ ...filteredTasks] );
  }

  return (
    <>
      <TaskForm 
        addTask={addTask}
        tasks={tasks}
      />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;
