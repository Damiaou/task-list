import { render } from "react-dom";
import React, { useState } from "react";

import Login from "./User/Login";
import useLocalStorage from "./hooks/useLocalStorage";
import { TaskList } from "./TaskList/TaskList";
import { LoginForm } from "./User/LoginForm";
import Home from "./Home/Home";

export default function App() {
  // localStorage.clear(); // To clear storage
  const [userEmail, setUserEmail] = useLocalStorage("user_email");
  const [homeHash, setHomeHash] = useLocalStorage("home_hash");
  // We must check state, if log in, display the app, if not, display log in

  const handleSetUserEmail = (e) => {
    e.preventDefault();
    // Check if user mail exist
    // Create it if not
    // Store it in local storage
    setUserEmail(e.target.email.value);
  };
  return (
    <div className="bg-green-200 h-screen flex items-center justify-center">
      {userEmail ? (
        <TaskList user={userEmail} home={homeHash} />
      ) : (
        <Login>
          {homeHash ? (
            <LoginForm handleEmail={handleSetUserEmail} />
          ) : (
            <Home homeHash={homeHash} setHomeHash={setHomeHash} />
          )}
        </Login>
      )}
    </div>
  );
}
