import React, { useState } from "react";
import "./Search.css";
import Add from "../src/assets/Add";

export default function Search({ setCity }) {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [newCity, setNewCity] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    setCity(newCity);
    setShowSearchBox(false);
  }

  return (
    <div className="search">
      {showSearchBox ? (
        <div className="searchBox">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="searchBox"
              placeholder="Type a city.."
              onChange={(event) => setNewCity(event.target.value)}
              autoFocus={true}
            />
          </form>
        </div>
      ) : (
        <div className="add" onClick={() => setShowSearchBox(true)}>
          <Add />
        </div>
      )}
    </div>
  );
}
