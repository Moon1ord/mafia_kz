import React from 'react';
import SideBarPanel from './components/menu/sideBarPanel';
import Display from './components/content/content_display';
import './App.css';

function App() {
  return (
    <div className="App">
      <SideBarPanel/>
      <Display/>
    </div>
  );
}

export default App;
