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
  handleChangeLog = () => {
    let val = this.state.user_loggin;
    this.setState({
      user_loggin: !val
    });
  }

  handleChangeRegister = () => {
    this.setState({
      user_loggin: false
    });
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
                  user_loggin={this.state.user_loggin}
                  handleChangeLog={this.handleChangeLog}
                  handleChangeRegister={this.handleChangeRegister}
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