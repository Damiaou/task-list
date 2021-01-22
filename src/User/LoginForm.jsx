import React from "react";

export const LoginForm = ({ handleEmail }) => {
  return (
    <form onSubmit={handleEmail}>
      <fieldset>
        <legend>Log in</legend>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <input type="submit" value="Save" />
        </div>
      </fieldset>
    </form>
  );
};
