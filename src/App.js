import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/kikikal/react-in-vs-code-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Christina Kalyvas
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://weather-search-engine-using-react-ck.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </header>
    </div>
  );
}

export default App;
