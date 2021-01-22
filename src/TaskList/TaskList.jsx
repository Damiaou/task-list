import React from "react";

export const TaskList = ({ children, user }) => {
  // Useeffect pour aller chercher toutes les tâches de la maison
  console.log("user", user);
  return <div>Hello {user}, I am the task list.</div>;
};
