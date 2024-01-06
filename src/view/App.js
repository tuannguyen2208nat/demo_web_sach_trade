import logo from './logo.svg';
import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello , Welcome to " Sách Trace "
        </p>
        <a
          className="App-contact"
          href="https://www.facebook.com/lilnat2208/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My contact
        </a>
      </header>
    </div>
  );
}

export default App;
