import { useState } from 'react';
import './App.css';

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
    const filteredTasks = tasks.filter(t => t.id !== id)

    setTasks( [ ...filteredTasks] );

  }

  function priorityLabel(param) {
    switch(param) {
      case '1':
        return 'Low';
      case '2':
        return 'Normal';
      case '3':
        return 'High';
      default:
        return 'Unkown';
    }
  }

  function priorityStyle(param, icon) {
    switch(param) {
      case '1':
        return icon ? 'smile' : 'success';
      case '2':
        return icon ? 'meh' : 'dark';
      case '3':
        return icon ? 'frown' : 'warning';
      default:
        return 'Unkown';
    }
  }

  return (
    <>
      <form className="row g-3">
          <div className="col-md-6">
              <label className="form-label">Id</label>
              <input 
              id='id' 
              type="text" 
              className="form-control" 
              readOnly
              value={
                Math.max.apply(
                  Math, 
                  tasks.map(t => t.id)
                ) + 1
              }
          />
          </div>
          <div className="col-md-6">
            <label className="form-label">Priority</label>
            <select id="priority" className="form-select">
              <option defaultValue="0">Choose...</option>
              <option value="1">Low</option>
              <option value="2">Normal</option>
              <option value="3">High</option>
            </select>
          </div>
          <div className="col-md-6">
              <label className="form-label">
                  Title
              </label>
              <input 
                  id='title' 
                  type="text" 
                  className="form-control" 
              />
          </div>
          <div className="col-md-6">
              <label className="form-label">
                  Description
              </label>
              <input 
                  id='description' 
                  type="text" 
                  className="form-control" 
              />
          </div>
          <br/>
          <div className='col-12'>
            <button 
              className="bnt btn-outline-secondary" 
              onClick={addTask}
            >
              + Task
            </button>
          </div>
      </form>
      <div className="mt-3">
          {tasks.map(t => (
              <div key={t.id} className={"card mb-2 shadow-sm border-" + priorityStyle(t.priority)}>
                <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title">
                          <span className="badge bg-secondary me-1">
                            {t.id}
                          </span>
                          - {t.title}
                        </h5>
                        <h6>
                            Priority: 
                            <span className={"ms-1 text-" + priorityStyle(t.priority)}>
                              <i className={"me-1 far fa-" + priorityStyle(t.priority, true)}></i>
                              {priorityLabel(t.priority)}
                            </span>
                        </h6>
                      </div>
                    <p className="card-text">{t.description}</p>
                    <div className="d-flex justify-content-end pt-2 m-0 border-top">
                      <button className='btn btn-sm btn-outline-primary me-2'>
                        <i className='fas fa-pen me-2'></i>
                        Edit
                      </button>
                      <button 
                        className='btn btn-sm btn-outline-danger'
                        onClick={() => deleteTask(t.id)}>
                      <i className='fas fa-trash me-2'></i>
                        Delete
                      </button>
                    </div>
                </div>
              </div>
          ))}
      </div>
    </>
  );
}

export default App;
