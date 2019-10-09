import React from "react";
import PhotoHandler from "./Components/NasaPhoto";
import "./App.css";
import NasaPhoto from "./Components/NasaPhoto";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="Space Ship">
          🚀
        </span>
        !
      </p>

      <NasaPhoto />
    </div>
  );
}

export default App;
