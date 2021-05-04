import Search from "./Search"
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="forecast">
        <div className="time"></div>
        <div className="date"></div>
        <div className="weatherIcon"></div>
        <div className="temperature"></div>
        <div className="description"></div>
      </div>
      <Search/>
    </div>
  );
}

export default App;
