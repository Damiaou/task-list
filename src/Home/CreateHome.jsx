import React, { useState } from 'react';
import axios from 'axios';

export const CreateHome = ({ setHomeHash, setCreationMode }) => {
  const [saving, setSaving] = useState(null);

  /**
   *
   * @param {string} data Is the response from hash creation call
   */
  const separateHash = (data) => {
    const index = data.indexOf('#');
    return data.substr(index + 1, index + 9);
  };

  const createHome = async (newLabel) => {
    setSaving(true);
    try {
      axios
        .post('https://65jdz.sse.codesandbox.io/home', {
          label: newLabel,
        })
        .then(
          (response) => {
            console.log(response);
            const newHash = separateHash(response.data);

            // Set in localstorage
            setHomeHash(newHash);
            setSaving(false);
            setCreationMode(false);
          },
          (error) => {
            setSaving(false);
            // TODO Display error to user
            console.log(error);
          },
        );
    } catch (e) {
      setSaving(false);
      alert(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLabel = e.target.label.value;
    await createHome(newLabel);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow text-green-900 border-4 border-green-400 p-5 bg-green-100 rounded-md"
    >
      <fieldset className=" p-4">
        <legend className="text-lg">
          Fill in the name of the new house
        </legend>
        <div>
          <label htmlFor="label" id="label_label">
            Name{' '}
          </label>
          <input
            type="text"
            name="label"
            id="label"
            placeholder="My new home"
            className="bg-transparent focus:border-green-300 focus:shadow outline-none text-center border-4 border-green-200 rounded placeholder-green-200"
          />
          <input
            className="ml-2 shadow border-green-200 border-4 px-2 rounded outline-none hover:bg-green-200 hover:shadow-lg bg-green-100"
            type="submit"
            disabled={saving}
            value={saving ? 'Saving...' : 'Save'}
          />
        </div>
      </fieldset>
    </form>
  );
};
