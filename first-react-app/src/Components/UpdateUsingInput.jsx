import React, { useState } from "react";

function FunctionComponent4({ name, age, graduation, setName }) {
  const [changeName, setChangeName] = useState("");
  return (
    <div className="App">
      <p>
        My name is <u>{name}</u> . I am <u>{age}</u> years old and I am
        currently pursing my graduation at <u> {graduation} </u>
      </p>
      <input onChange={(e) => setChangeName(e.target.value)} />
      <button onClick={() => setName(changeName)}>
        Click me to update the Name
      </button>
      <br />
      <br />
    </div>
  );
}

/**
 * props.name is the static type
 * course is the dynamic type
 */

export default FunctionComponent4;