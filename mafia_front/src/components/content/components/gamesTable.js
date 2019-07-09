import React from 'react';
import $ from "jquery";

class GameTable extends React.Component{
    
    constructor(props){
        super(props);
        this.getGames = this.getGames.bind(this);
        this.state = {
            games : []
        };
    }
    
    getGames(){
        const self = this;
        let url = "https://localhost:5001/api/game/";
        $.get(url, function(data){
            console.log(data);
            self.setState({
                games : data
            })
        });
    }
    
    componentDidMount() {
        this.getGames();
    };
    
    renderTable =  () => {
        return(
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Game Date</th>
                </tr>
                    {this.state.games.map((item)=> {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.game_Date}</td>
                        </tr>
                    })}
            </tbody>
        )         
    };
    
    
    render() {
        return (
            <table className="table table-bordered">
                {this.renderTable()}
            </table>
        );
    }
}

export default GameTable;