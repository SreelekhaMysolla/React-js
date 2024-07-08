// ---------------------------- Routes -------------------------------

import "./App.css";

import ClassComponent from "./Components/ClassComponent";
import FunctionComponent from "./Components/FunctionComponent";
import FunctionComponent1 from "./Components/PropsFunctionComponent";
import FunctionComponent2 from "./Components/UpdatingData";
import FunctionComponent3 from "./Components/UpdateUsingButton";
import FunctionComponent4 from "./Components/UpdateUsingInput";
import { Routes, Route } from "react-router-dom";

// ---- Updating a value ----
import { useState } from "react";

function App() {
  const [name, setName] = useState("Ravali Katkam"); // --- updating a value ----
  const [nameValue, setNameValue] = useState("Ravali Katkam");
  const [names, setNames] = useState("Ravali Katkam");
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<ClassComponent />} />
          <Route path="/function-component" element={<FunctionComponent />} />
          <Route
            path="/prop"
            element={
              <FunctionComponent1
                name={name}
                age={20}
                graduation="St Francis College for women"
              />
            }
          />
          <Route
            path="/updateUsingData"
            element={
              <FunctionComponent2
                name={name}
                age={20}
                graduation="St Francis College for women"
              />
            }
          />
          <Route
            path="/updateUsingButton"
            element={
              <FunctionComponent3
                name={nameValue}
                age={20}
                graduation="St Francis College for women"
                setName={setNameValue}
              />
            }
          />
          <Route
            path="/updateUsingInput"
            element={
              <FunctionComponent4
                name={names}
                age={20}
                graduation="St Francis College for women"
                setName={setNames}
              />
            }
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;