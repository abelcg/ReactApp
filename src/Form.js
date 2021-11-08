import React, { useState } from "react";

const Form = (props) => {
  const initialState = {
    name: "",
    job: "",
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCharacter({ ...character, [name]: value });
  };

  const submitForm = (e) => {
    props.handleSubmit(e ,character);
    setCharacter(initialState);
  };
  const [character, setCharacter] = useState(initialState);
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={character.name}
        onChange={handleChange}
      />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={character.job}
        onChange={handleChange}
      />
      <div className="text-center">
      <input className="btn btn-success" type="button" value="Submit" onClick={submitForm} />
      </div>
    </form>
  );
};

export default Form;
