import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

const App = () => {
  return (
    <BrowserRouter >
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;