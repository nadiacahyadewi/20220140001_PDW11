import logo from './hello.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Welcome to my youtube channel</code> 
        </p>
        <a
          className="App-link"
          href="https://youtube.com/@nadiacahyadewi6621?si=cG_lVo06dW5wAO-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here !
        </a>
      </header>
    </div>
  );
}

export default App;
