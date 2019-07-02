import React from 'react';
import $ from "jquery";

class GameTable extends React.Component{

    state = {
        games : []
    };

    componentDidMount() {
        let url = "https://localhost:5001/api/game/";
        let fetchedGames = $.get(url);
        this.setState({
            games: fetchedGames
        },()=>{
            console.log(this.state.games);
        });
    }

    render() {
        return (
            <div>
                <table border="1" className="table" id="tableOfGames">
                    <tbody>
                    {this.rederTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GameTable;