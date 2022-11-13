import { useState } from 'react';
import './App.css';

let initialState = [
  {
    id : 1,
    description : "First Task"
  },
  {
    id : 2,
    description : "Second Task"
  }
]

function App() {
  const [tasks, setTasks] = useState(initialState)


  function addTask(e) {
    e.preventDefault();
    const task = {
      id: document.getElementById('id').value,
      description: document.getElementById('description').value,
    };
    console.log(tasks);
    setTasks( [ ...tasks, {...task}] );
    }

  return (
    <>
      <form className="row g-3">
          <div className="col-md-6">
              <label for="inputEmail4" className="form-label">Id</label>
              <input id='id' type="text" className="form-control" />
          </div>
          <div className="col-md-6">
              <label for="inputEmail4" className="form-label">Description</label>
              <input id='description' type="text" className="form-control" />
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
              <div key={t.id} className="card mb-2 shadow-sm">
                <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title">
                          <span className="badge bg-secondary me-1">
                            {t.id}
                          </span>
                          - title
                        </h5>
                        <h6>
                            Priority: 
                            <span className="ms-1 text-black">
                              <i className="me-1 far fa-meh"></i>
                              Normal
                            </span>
                        </h6>
                      </div>
                    <p className="card-text">{t.description}</p>
                    <div className="d-flex justify-content-end pt-2 m-0 border-top">
                      <button className='btn btn-sm btn-outline-primary me-2'>
                        <i className='fas fa-pen me-2'></i>
                        Edit
                      </button>
                      <button className='btn btn-sm btn-outline-danger'>
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
