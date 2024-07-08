// ------------ First way of writing props -------------------

import React, { useState } from "react";

const FunctionComponent5 = (props) => {
  const [count, setCount] = useState(0);
  const [changeName, setChangeName] = useState("");
  const reduceCount = () => {
    setCount(count - 1);
  };
  const { name, age, course, graduation, setName } = props;
  return (
    <div>
      <header className="App-Header">
        <h4>
          My name is <u>{name}</u> . I am <u>{age}</u> years old and I am
          currently pursing my graduation in a stream called
          <u>{course}</u> at
          <u> {graduation} </u>
        </h4>
        <input onChange={(e) => setChangeName(e.target.value)} />
        <button onClick={() => setName(changeName)}>Change name to...</button>
      </header>
    </div>
  );
};

export default FunctionComponent5;

//------------------ Second method of writing proops -----------------------------------
/**
import React from "react";

function FunctionComponent6(props) {
  const course = "Bsc Honors";
  return (
    <div className="App">
      <p>
        My name is <u>{props.name}</u> . I am <u>{props.age}</u> years old and I
        am currently pursing my graduation in a stream called <u>{course}</u> at
        <u> {props.graduation} </u>
      </p>
      <button onClick={() => props.setName("Sonu")}>
        Click me to update the Name
      </button>
    </div>
  );
}

export default FunctionComponent6;
*/
// -------------- Third way of writing props ------------------------------
/**
import React, { useState } from "react";

function FunctionComponent7({ name, age, graduation, setName }) {
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

export default FunctionComponent7;
*/