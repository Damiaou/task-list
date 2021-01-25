import React, { useState } from 'react';
import Week from '../Week/Week';

export const TaskList = ({ children, user }) => {
  const [tasks, setTasks] = useState([]);
  // const taskReducer = (state, action) => {
  //   switch (action.type) {
  //     case 'ADD': {
  //       return { ...state, tasks: [...state.task, action.payload] };
  //     }
  //     default: {
  //       throw new Error('Action unknown');
  //     }
  //   }
  // };
  // Useeffect pour aller chercher toutes les tâches de la maison
  console.log('user', user);
  return (
    <Week>
      {tasks.map((t) => (
        <div>{JSON.stringify(t)}</div>
      ))}
    </Week>
  );

  return <div>Hello {user}, I am the task list.</div>;
};
