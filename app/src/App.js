import logo from './logo.svg';
import './App.css';
import Button from "./Imports/Button.js"

function App() {
  const orderRedirect = () => {
    alert("order click")
  }
  const aboutRedirect = () => {
    alert("about click")
  }
  const menuOverlay = () => {
    alert("menu click")
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span className = "TopBar">
            <span className = "RightHeader">
              <Button text = "Order-Request" onclick={orderRedirect} variant="order"></Button>
              <Button text = "About" onclick={aboutRedirect} variant="order"></Button>
              <Button text = "Menu" onclick={menuOverlay} variant="order"></Button>
            </span>
          </span>
        </div>
        <p>
          <span className = "IntroPageTitle">Welcome to Dulce Tentaciones</span>
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
