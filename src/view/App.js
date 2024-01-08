import './App.scss'
import Home from './components/home/home';
import Trade from './components/trade/trade';
import User from './components/user/user';
import About from './components/about/about';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            <Route path="/trade">
              <Trade />
            </Route>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>

        </header>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
