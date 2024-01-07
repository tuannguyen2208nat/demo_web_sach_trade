
import './App.scss'
import Home from './components/home/home';
import Trace from './components/trace/trace';
import User from './components/user/user';
import About from './components/about/about';

import Nav from '../Nav/Nav';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/trace">
              <Trace />
            </Route>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>

        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
