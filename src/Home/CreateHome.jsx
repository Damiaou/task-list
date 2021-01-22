import React, { useState } from "react";
import axios from "axios";

export const CreateHome = ({ setHomeHash, setCreationMode }) => {
  const [saving, setSaving] = useState(null);
  const createHome = async (newLabel) => {
    setSaving(true);
    try {
      axios
        .post("https://v8h4w.sse.codesandbox.io/home", {
          label: newLabel
        })
        .then(
          (response) => {
            console.log(response);
            const index = response.data.indexOf("#");
            const newHash = response.data.substr(index + 1, index + 9);

            // Set in localstorage
            setHomeHash(newHash);
            setSaving(false);
            setCreationMode(false);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (e) {
      alert(e);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLabel = e.target.label.value;
    await createHome(newLabel);
  };
  return (
    <form onSubmit={handleSubmit} className="bg-red-200">
      <legend>Fill in the name to create a new house</legend>
      <div className="form-group">
        <label htmlFor="label" id="label_label">
          Name
        </label>
        <input type="text" name="label" id="label" />
        <input
          type="submit"
          disabled={saving}
          value={saving ? "Saving..." : "Save"}
        />
      </div>
    </form>
  );
};
