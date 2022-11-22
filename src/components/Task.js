import React from 'react'

export default function Task(props) {

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
    <div className={"card mb-2 shadow-sm border-" + priorityStyle(props.t.priority)}>
    <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">
              <span className="badge bg-secondary me-1">
                {props.t.id}
              </span>
              - {props.t.title}
            </h5>
            <h6>
                Priority: 
                <span className={"ms-1 text-" + priorityStyle(props.t.priority)}>
                  <i className={"me-1 far fa-" + priorityStyle(props.t.priority, true)}></i>
                  {priorityLabel(props.t.priority)}
                </span>
            </h6>
          </div>
        <p className="card-text">{props.t.description}</p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button className='btn btn-sm btn-outline-primary me-2'>
            <i className='fas fa-pen me-2'></i>
            Edit
          </button>
          <button 
            className='btn btn-sm btn-outline-danger'
            onClick={() => props.deleteTask(props.t.id)}
            >
          <i className='fas fa-trash me-2'></i>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
