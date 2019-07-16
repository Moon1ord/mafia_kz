import React from 'react';
import './App.css';
import Game from './components/Games/Game';
import Players from './components/Players/Players';

class App extends React.Component{
    render() {
        return (
            <div className="App">
                <Game/>
                <Players/>
            </div>
        );
    }
}

export default App;
