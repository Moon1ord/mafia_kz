import React from 'react';
import $ from "jquery";

class GameTable extends React.Component{

    state = {
        games : []
    };
    
    componentDidMount() {
        const self = this;
        let url = "https://localhost:5001/api/game/";
        $.get(url, function(data){
            self.setState({
                games : data
            })
        });
    };
    
    renderTable = () => {
        return(
            <tbody>
                <tr>
                    <th>Id</th>
                </tr>
                    {this.state.games.map((item, index)=> {
                        return <tr><td>{item.id}</td></tr>
                    })}
            </tbody>
        )         
    };
    
    
    render() {
        return (
            <table className="table">
                {this.renderTable()}
            </table>
        );
    }
}

export default GameTable;