import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ClassCards from './components/ClassCards/ClassCards';
import Main from './components/Main/Main';
import ClassCard from './components/ClassCards/ClassCard';
import './App.css'
function App() {
  return (
    <div className='App' >
      <BrowserRouter>
        <Route exact path='/countries' component={ClassCards} />
        <Route exact path='/' component={Main} />
      </BrowserRouter>
    </div>
  )
}

export default App;
