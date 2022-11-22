import React from 'react';
import Task from './Task';

export default function TaskList(props) {
  return (
        <div className="mt-3">
          {props.tasks.map((t) => (
            <Task 
              key={t.id} 
              t={t}
              deleteTask={props.deleteTask}
            />
          ))}
      </div>
  );
}
