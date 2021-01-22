import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from '../User/Login';
import { CreateHome } from './CreateHome';

const Home = ({ homeHash, setHomeHash }) => {
  if (!homeHash) {
    // If not , user must enter it or create it
  }
  useEffect(() => {
    // In localStorage is there a home hash
  });

  const [creationMode, setCreationMode] = useState(null);

  if (creationMode) {
    return (
      <CreateHome
        setHomeHash={setHomeHash}
        setCreationMode={setCreationMode}
      />
    );
  }

  const handleHashChange = (e) => {
    const target = e.target;
    console.log('change value', e.target.value);
    if (target.value.length === 8) {
      // Hash is complete, we can send it to the API to check wether it is known or not
      const givenHash = target.value;
      axios
        .get(`https://65jdz.sse.codesandbox.io/home/${givenHash}`)
        .then((response) => {
          console.log(response);
          if (response.data.length === 0) {
            alert('This hash is not known, you must create one');
          } else {
            console.log("I know you, i'm logging you");
          }
        });
    }
  };

  // If not, let user give it
  // If not, let user create home and get the hash
  // Hash as a primary id and based on the name
  return homeHash ? (
    <div>It seems you already have a home hash</div>
  ) : (
    <div className="shadow text-green-900 border-4 border-green-400 p-5 bg-green-100 rounded-md">
      Hello,{' '}
      <input
        maxLength="8"
        minLength="8"
        type="text"
        name="home_hash"
        id="home_hash"
        placeholder="type"
        onChange={(e) => handleHashChange(e)}
        className="bg-transparent focus:border-green-300 focus:shadow outline-none text-center border-4 border-green-200 rounded placeholder-green-500"
      />{' '}
      your home hash or{' '}
      <button
        id="home_hash"
        disabled={creationMode}
        onClick={() => setCreationMode(!creationMode)}
        className="shadow border-green-200 border-4 px-2 rounded outline-none hover:bg-green-200 hover:shadow-lg"
      >
        Create a new home
      </button>
    </div>
  );
};

export default Home;
