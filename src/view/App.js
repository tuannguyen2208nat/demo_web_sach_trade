import logo from './logo.svg';
import './App.scss'
import Home from './components/home';
import Contact from './components/contact';

import Nav from '../Nav/Nav';
import {
  BrowserRouter,
  Switch,
  Route,
  // Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
