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
            game_id : this.props.location.state.game_id
        }
    }

    getPlayers = async() => {
        const self = this;
        let id = this.state.game_id;
        let url = "https://localhost:5001/api/player/getplayersingame/" + id;        ;
        await $.get(url, function(data){
            self.setState({
                maf_players : data
            });
        })
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

    componentWillMount(){
        this.getPlayers();
    }
    
    render(){
        return(
            <div id="Mafia">
                <button onClick={this.putPlayerinGame}>Add Player</button>
                    <MafTable listOfPlayers={this.state.maf_players}/>  
            </div>
        );
    }
}

export default Mafia;