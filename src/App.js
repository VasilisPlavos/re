import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Vasilis React App
        </p>
        <a
          className="App-link"
          href="https://youtu.be/F8s4Ng-re0E"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube: How to Deploy React App to GitHub Pages
        </a>
      </header>
    </div>
  );
}

export default App;
