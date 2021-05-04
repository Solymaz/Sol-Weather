import React, { useState } from "react";
import "./Search.css";
import Add from "../src/assets/Add";

export default function Search({ setCity }) {
  const [showSearchBox, setShowSearchBox] = useState(false);

  return (
    <div className="search">
      {showSearchBox ? (
        <div className="searchBox">
          <form>
            <input
              type="search"
              className="searchBox"
              placeholder="Type a city.."
              onChange={(event) => setCity(event.target.value)}
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
