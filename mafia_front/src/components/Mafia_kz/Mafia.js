import React from 'react';
import $ from 'jquery';
import MafTable from './Maf_table';

class Mafia extends React.Component{

    constructor(props){
        super(props);
        this.getPlayers = this.getPlayers.bind(this);
        this.putPlayerinGame = this.putPlayerinGame.bind(this);
        this.state={
            maf_players : [],
            game_id : this.props.location.state.game_id
        }
    }

    getPlayers = async() => {
        const self = this;
        let id = this.state.game_id
        let url = "https://localhost:5001/api/player/getplayersingame/" + id;        ;
        await $.get(url, function(data){
            self.setState({
                maf_players : data
            });
        })
    };

    putPlayerinGame = () => {
        const self = this;
        let id = this.state.game_id;∑∑∑∑∑∑∑∑∑∑∑lk
        let url = ("https://localhost:5001/api/player/PutPlayerInTheGame/" + id);
        let PlayerLogin = prompt("Add player to the game " + id);
        $.post(url, {login : PlayerLogin}).done(function(){
            self.getPlayers();
        });
    };

    render(){
        return(
            <div>
                <button onClick={this.putPlayerinGame}>Add Player</button>
                    <MafTable listOfPlayers={this.state.maf_players}/>  
            </div>
        );
    }

    componentDidMount(){
        
        this.getPlayers();
    }

}

export default Mafia;