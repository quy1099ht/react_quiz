import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import { Provider } from 'react-redux';
import store from './reducer/store';
import Quizzes from './containers/Quizzes';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/result" element={<></>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>

  );
}

export default App;
