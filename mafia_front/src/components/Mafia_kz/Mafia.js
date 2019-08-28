import React from 'react';
import $ from 'jquery';
import MafTable from './Maf_table';

class Mafia extends React.PureComponent{

    constructor(props){
        super(props);
        this.getPlayers = this.getPlayers.bind(this);
        this.putPlayerinGame = this.putPlayerinGame.bind(this);
        this.state={
            maf_players : [],
            game_id : this.props.location.state.game_id,
        }
    }

    toggleMafia = () => {
        $('#Mafia').hide(); 
        $('#game_table').show();
        $('#Menu').show();
        $('#Game_menu').show();
        
    }

    isReady = () => {
        if(this.state.maf_players.length === 10){
            $('#start_button').show();
            $('#add_player').hide();
            return true;
        } else {
            $('#start_button').hide();
            $('#add_player').show();
            return false;
        }
    }

    getPlayers = async() => {
        const self = this;
        let id = this.state.game_id;
        let url = "https://localhost:5001/api/player/getplayersingame/" + id;
        await $.get(url, function(data){
            self.setState({
                maf_players : data
            });
        }).then(() => {this.isReady()})
    };

    putPlayerinGame = async() => {
        const self = this;
        let id = this.state.game_id;
        let url = ("https://localhost:5001/api/player/PutPlayerInTheGame/" + id);
        let PlayerLogin = prompt("Add player to the game " + id);
        await $.post(url, {login : PlayerLogin}).done(function(){
            self.getPlayers();
        });
    };

    removePlayerFromGame = async(player_id) => {
        let url = "https://localhost:5001/api/player/DeletePlayerFromGame/";
        let game_id = this.state.game_id;
        console.log(player_id + ' ' + game_id);
        await $.post(url, {gameId : game_id, playerId : player_id });
        this.getPlayers();
    }

    componentWillReceiveProps(nextProps){
        const self = this;
        if(this.props.location.game_id !== nextProps.location.state.game_id){
            self.setState({game_id : nextProps.location.state.game_id}, () => {
                self.getPlayers();
            })
        }else{
            return false;
        }
    }

    componentDidMount(){
        this.getPlayers();
    }
    
    render(){
        return(
            <div id="Mafia">
                <button id='add_player' onClick={this.putPlayerinGame}>Add Player</button>
                    <MafTable listOfPlayers={this.state.maf_players}
                    removePlayer={this.removePlayerFromGame}/>
                    <button onClick={this.toggleMafia}>Close</button>  
            </div>
        );
    }
}

export default Mafia;