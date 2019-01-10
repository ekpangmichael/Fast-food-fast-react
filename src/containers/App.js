import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../components/home/HomePage';
import SignUp from '../components/signup/SignUp';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import store from '../store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={HomePage} />
              <Route path="/signup" exact component={SignUp} />
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
