import React from 'react';
import $ from 'jquery';
import PlayersMenu from './PlayersMenu';
import Table from './Table';

class Players extends React.PureComponent{
    constructor(props){
        super(props);
        this.createPlayer = this.createPlayer.bind(this);
        this.getPlayers = this.getPlayers.bind(this);
        this.state = {
            players : []
        }
    }

    createPlayer = async() => {
        const self = this;
        let url = "https://localhost:5001/api/player/";
        let myLogin = prompt("Create your login!");
        await  $.post(url, {login : myLogin }).done(function (data) {
            console.log("User Created");
            self.getPlayers();
        })
    };

    getPlayers = async () => {
        const self = this;
        let url = "https://localhost:5001/api/player/";
        await $.get(url, function (data) {
            self.setState({players : data});
        }).done(function () {
            console.log(self.state.players);
        })
    };

    componentDidMount() {
        this.getPlayers();
    }

    render() {
        return (
            <div className="menuComponent" id="Players">
                <PlayersMenu createPlayerMethod={this.createPlayer}/>
                <Table listOfPlayers={this.state.players}/>
            </div>
        );
    }
}

export default Players;