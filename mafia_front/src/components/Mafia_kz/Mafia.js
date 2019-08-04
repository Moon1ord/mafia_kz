import React from 'react';
import $ from 'jquery';

class Mafia extends React.Component{

    getPlayers(){
        let id = window.location.pathname.split("/").pop();
        let url = "https://localhost:5001/api/player/getplayersingame/" + id;        ;
        $.get(url, function(data){
            console.log(data);
        })
    }

    componentDidMount(){
        this.getPlayers();
    }
    
    render(){
        return(
            <div>
                <p>Hello</p>
            </div>
        );
    }

}

export default Mafia;