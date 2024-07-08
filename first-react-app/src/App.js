// -----------------------Components , State , Hooks and Props -----------------------------------
/**
import "./App.css";

// Importing call component
import ClassComponent from "./Components/ClassComponent";
import FunctionComponent from "./Components/FunctionComponent";
import FunctionComponent1 from "./Components/PropsFunctionComponent";
import FunctionComponent2 from "./Components/UpdatingData";
import FunctionComponent3 from "./Components/UpdateUsingButton";
import FunctionComponent4 from "./Components/UpdateUsingInput";

// ---- Updating a value ----
import { useState } from "react";

function App() {
  const [name, setName] = useState("Ravali Katkam"); // --- updating a value ----
  const [names, setNames] = useState("Ravali Katkam");
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-P"> Class Components </p>
        <ClassComponent />
        <br />

        <p className="App-P"> Function Components </p>
        <FunctionComponent />
        <br />

        <p className="App-P"> Using Props </p>
        <FunctionComponent1
          name="Ravali"
          age={20}
          graduation="St Francis College for women"
        />

        <p className="App-P">
          Updating the name data internally and adding course data externally
        </p>
        <FunctionComponent2
          name={name}
          age={20}
          graduation="St Francis College for women"
        />

        <p className="App-P"> Updating the data using button </p>
        <FunctionComponent3
          name={name}
          age={20}
          graduation="St Francis College for women"
          setName={setName}
        />

        <p className="App-P"> Updating the data using input </p>
        <FunctionComponent4
          name={names}
          age={20}
          graduation="St Francis College for women"
          setName={setNames}
        />
      </header>
    </div>
  );
}

export default App;
 */

// ---------------------------- Routes -------------------------------
/**
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
                name={name}
                age={20}
                graduation="St Francis College for women"
                setName={setName}
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
*/

// ------------------------------------- Layouts --------------------------------------------
import "./App.css";

import ClassComponent from "./Pages/ClassComponent";
import FunctionComponent from "./Pages/FunctionComponent";

import { Routes, Route } from "react-router-dom";

// ---- Updating a value ----
import { useState } from "react";

// ------- Basic Layout --------
import BaseLayoutPage from "./Layout/BaseLayout";

function App() {
  const course = "Bsc Honors";
  const [name, setName] = useState("Ravali Katkam");
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BaseLayoutPage>
            <ClassComponent />
          </BaseLayoutPage>
        }
      />

      <Route
        path="/function-component"
        element={
          <BaseLayoutPage>
            <FunctionComponent
              name={name}
              age={20}
              graduation="St Francis College for women"
              course={course}
              setName={setName}
            />
          </BaseLayoutPage>
        }
      />
    </Routes>
  );
}

export default App;