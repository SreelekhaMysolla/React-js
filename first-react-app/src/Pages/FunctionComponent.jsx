// -------- One method of Writing proops ----------
/*
import React, { useState } from "react";

import BaseLayoutPage from "../Layout/BaseLayout";

const FunctionComponent = (props) => {
  const [count, setCount] = useState(0);
  const [changeName, setChangeName] = useState("");
  const reduceCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p>This is Functional Component</p>
      <button onClick={() => setCount(count + 1)}>
        Click me to increment/add by 1
      </button>
      <button onClick={reduceCount}>Click here to decrement </button>
      <h2>{count}</h2>
      <h4>
        My company is:{props.name} it is of {props.age} years old and the course
        would be {props.course}
      </h4>
      <input onChange={(e) => setChangeName(e.target.value)} />
      <button onClick={() => props.setName(changeName)}>
        Change name to...
      </button>
    </div>
  );
};

export default BaseLayoutPage(FunctionComponent);
*/

//------------------ Second method of writing proops -----------------------------------

import React, { useState } from "react";
import BaseLayoutPage from "../Layout/BaseLayout";

const FunctionComponent = (props) => {
  const [count, setCount] = useState(0);
  const [changeName, setChangeName] = useState("");
  const reduceCount = () => {
    setCount(count - 1);
  };
  const { name, age, course, setName } = props;
  return (
    <div>
      <p>This is Functional Component</p>
      <button onClick={() => setCount(count + 1)}>
        Click me to increment/add by 1
      </button>
      <button onClick={reduceCount}>Click here to decrement </button>
      <h2>{count}</h2>
      <h4>
        My company is:{name} it is of {age} years old and the course would be{" "}
        {course}
      </h4>
      <input onChange={(e) => setChangeName(e.target.value)} />
      <button onClick={() => setName(changeName)}>Change name to...</button>
    </div>
  );
};

export default BaseLayoutPage(FunctionComponent);

// -------------- Third way of writing props ------------------------------
/**
import React, { useState } from "react";
import BaseLayoutPage from "../Layout/BaseLayout";

function FunctionComponent({ name, age, graduation, setName }) {
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

export default BaseLayoutPage(FunctionComponent);

*/