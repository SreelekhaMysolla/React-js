import React from "react";

function FunctionComponent3(props) {
  const course = "Bsc Honors";
  return (
    <div className="App">
      <p>
        My name is <u>{props.name}</u> . I am <u>{props.age}</u> years old and I
        am currently pursing my graduation in a stream called <u>{course}</u> at
        <u> {props.graduation} </u>
      </p>
      <button onClick={() => props.setName("Chinni")}>
        Click me to update the Name
      </button>
    </div>
  );
}

/**
 * props.name is the static type
 * course is the dynamic type
 */

export default FunctionComponent3;