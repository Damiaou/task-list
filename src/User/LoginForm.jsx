import React from 'react';
import Button from '../Components/Button';

export const LoginForm = ({ handleEmail }) => {
  return (
    <form
      onSubmit={handleEmail}
      className="shadow text-green-900 border-4 border-green-400 p-5 bg-green-100 rounded-md"
    >
      <fieldset className="p-4">
        <legend className="text-lg">
          Log in (or create, it's the same here)
        </legend>
        <div className="form-group">
          <label htmlFor="email" className="mr-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="contact@task.com"
            className="bg-transparent focus:border-green-300 focus:shadow outline-none text-center border-4 border-green-200 rounded placeholder-green-200"
          />
          <Button className="ml-2" submit={true}>
            Save
          </Button>
        </div>
      </fieldset>
    </form>
  );
};
