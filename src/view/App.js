
import './App.scss'
import Home from './components/home';
import Trace from './components/trace';
import Contact from './components/contact';
import About from './components/about';

import Nav from '../Nav/Nav';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/trace">
              <Trace />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
