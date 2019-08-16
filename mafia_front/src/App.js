import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Game from './components/Games/Game';
import Players from './components/Players/Players';
import {BrowserRouter} from 'react-router-dom';

class App extends React.Component{
    render() {
        return (
            <div className="App">
                <Menu/>
                <Game/>
                <Players/>
            </div>
        );
    }
}

export default App;
