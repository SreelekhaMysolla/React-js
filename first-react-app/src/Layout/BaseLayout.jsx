import React from "react";

const BaseLayoutPage =
  (Component) =>
  (...props) => {
    return (
      <div>
        <h1> This is our navbar </h1>
        <Component {...props} />
        <h1> This is our foooter </h1>
      </div>
    );
  };

export default BaseLayoutPage;;