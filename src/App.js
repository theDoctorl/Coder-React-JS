
import './App.css';

function App() {
  let imagen = "escudo-BOCAJRS.png"
  return (
    <div className="App">
      <header className="App-header">
        <img src={imagen} className="App-logo" alt="logo" />
        <p>
          Boca Juniors
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
