// -------------- Normal Class Component ----------------

/**
import React from "react";
import BaseLayoutPage from "./Layout/BaseLayout";

class ClassComponent extends React.Component {
  render() {
    return (
      <>
        <p>This is class Components</p>
      </>
    );
  }
}

export default BaseLayoutPage(ClassComponent);
*/

// ---------------- Class Component using Constructor -----------------
import React from "react";
import BaseLayoutPage from "../Layout/BaseLayout";
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Devtwon",
      age: "5 years",
    };
  }
  render() {
    return (
      <>
        <p>This is class Components</p>
      </>
    );
  }
}

export default BaseLayoutPage(ClassComponent);