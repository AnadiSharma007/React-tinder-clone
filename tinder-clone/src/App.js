import React from 'react';
import TinderCards from './TinderCards'
import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    //BEm class naming convention
    <div className="app">
    
     <Header />
     <TinderCards />
     <SwipeButtons />
    </div>
  );
}

export default App;
