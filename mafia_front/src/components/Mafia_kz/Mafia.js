import React from 'react';
import $ from 'jquery';
import MafTable from './Maf_table';

class Mafia extends React.PureComponent{

    constructor(props){
        super(props);
        this.getPlayers = this.getPlayers.bind(this);
        this.putPlayerinGame = this.putPlayerinGame.bind(this);
        this.state={
            maf_players : []
        }
    }

    getPlayers = async() => {
        const self = this;
        let id = window.location.pathname.split("/").pop();
        let url = "https://localhost:5001/api/player/getplayersingame/" + id;        ;
        await $.get(url, function(data){
            self.setState.maf_players = data;
        })
    };

    putPlayerinGame = async() =>{
        let id = window.location.pathname.split("/").pop();
        let url = ("https://localhost:5001/api/player/PutPlayerInTheGame/" + id);
        let PlayerLogin = prompt("Add player to the game " + id);
        await $.post(url, {login : PlayerLogin});

        this.getPlayers();
    };

    componentDidMount(){
        this.getPlayers();
    };
    
    render(){
        return(
            <div>
                <button onClick={this.putPlayerinGame}>Add Player</button>
                <MafTable listOfPlayers={this.state.maf_players}/>
            </div>
        );
    }

}

export default Mafia;