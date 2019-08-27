import React from 'react';

class MafTable extends React.Component{

    renderTable = () => {
        return(
            <table className="table table-bordered">
                <tbody>
                <tr>
                    <th>Login</th>
                    <th>Actions</th>
                </tr>
                {this.props.listOfPlayers.map((item)=> {
                    return <tr key={item.player_id}>
                        <td>{item.login}</td>
                        <td>
                            <button onClick={() => {this.props.removePlayer(item.player_id)}}>Remove</button>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        );
    };

    render(){
        return(
            <div id='maf_table'>
                {this.renderTable()}
                <button id='start_button'>Start Game</button>
            </div>
        )
    }
}

export default MafTable;