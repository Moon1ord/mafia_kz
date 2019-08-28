import React from 'react';
import $ from "jquery";
import './Game.css';
import GameMenu from './GameMenu';
import Table from './Table';

class Game extends React.PureComponent{

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
        await $.post(url, {Game_Date: now.toLocaleTimeString()}).done(function () {
                self.getGames();
                console.log('createGame finished!');
            }
        );
    };

    getGames = async() => {
        const self = this;
        let url = "https://localhost:5001/api/game/";
        await $.get(url, function(data){
            console.log(data);
            self.setState({
                games : data
            })
        });
    };

    deleteGame = async(gameId) => {
        const self = this;
        let url = "https://localhost:5001/api/game/deleteGame";
        await $.post(url, {Id : gameId}, function(){
            console.log(gameId + " deleted");
            self.getGames();
            $('#Mafia').hide();
        });
    };


    getGameById = async (gameId) => {
        let url = 'https://localhost:5001/api/game/getgame/' + gameId;
        await $.get(url, function(data){
            console.log(data);
        });
        
    }

    componentDidMount() {
        this.getGames();
    }

    render() {
        return (
            <div className="menuComponent" id="Game">
                <GameMenu createGameMethod={this.createGame}
                          updateTable={this.getGames}/>
                <Table listOfGames={this.state.games}
                       deleteGameMethod={this.deleteGame}
                       getGameByIdMethod={this.getGameById}/>
            </div>
        );
    }
}

export default Game;
