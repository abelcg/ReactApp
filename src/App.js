import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";
import Title from "./Title"
import Subtitle from "./Subtitle"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const characters = [];
  const [ArrayCharacters, setCharacters] = useState(characters);

  const removeCharacter = (index) => {
    setCharacters(
      ArrayCharacters.filter((character, i) => {
        return i !== index;
      })
    );
  };

  const handleSubmit = (e ,character) => {
    e.preventDefault();
    setCharacters([...ArrayCharacters, character]);
  };

  return (
    <div className="container">
      <Title/>
      <Subtitle />
      <Table
        characterData={ArrayCharacters}
        removeCharacter={removeCharacter}
      />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
