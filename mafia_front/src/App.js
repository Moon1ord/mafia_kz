import React from 'react';
import './App.css';

import Menu from './components/Menu';
import Table from './components/Table';
import $ from "jquery";

class App extends React.Component{

    constructor(props){
        super(props);
        this.createGame = this.createGame.bind(this);
        this.getGames = this.getGames.bind(this);
        this.state = {
            games:[]
        }
    }

    createGame = async () => {
        const self = this;
        let url = "https://localhost:5001/api/game/";
        let now = new Date();
        await $.post(url, {Game_Date: now.toDateString()}).done(function () {
                self.getGames();
                console.log('createGame finished!');
            }
        );
    };

    getGames = async () => {
        const self = this;
        let url = "https://localhost:5001/api/game/";
        $.get(url, function(data){
            console.log(data);
            self.setState({
                games : data
            })
        });
    };

    componentDidMount() {
        this.getGames();
    }

    render() {
        return (
            <div className="App">
                <Menu createGameMethod={this.createGame}
                      updateTable={this.getGames}/>
                <Table listOfGames={this.state.games}/>
            </div>
        );
    }
}

export default App;
