import React from "react";

function FunctionComponent1(props) {
  return (
    <div className="App">
      <h4>
        My name is <u>{props.name}</u> . I am <u>{props.age}</u> years old and I
        am currently pursing my graduation at <u>{props.graduation}</u>
      </h4>
    </div>
  );
}

/**
 * props.name is the static type
 * course is the dynamic type
 */

export default FunctionComponent1;