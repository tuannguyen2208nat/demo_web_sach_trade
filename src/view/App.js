import React from "react";
import './App.scss'
import Home from './components/home/home';
import { Trade } from './components/trade/trade';
import Login from './components/user/user';
import About from './components/about/about';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../Nav/Nav';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  state = {
    user_loggin: false
  }
  handleLogin = () => {
    this.setState({
      user_loggin: true
    })
  }

  render() {
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
                <Trade
                  user_loggin={this.state.user_loggin}
                />
              </Route>
              <Route path="/user">
                <Login
                  handleLogin={this.handleLogin}
                />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>

          </header>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <ToastContainer />
        </div>
      </BrowserRouter >
    );
  }

}

export default App;