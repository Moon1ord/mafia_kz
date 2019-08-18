import React from 'react';

class MafTable extends React.Component{

    renderTable = () => {
        return(
            <table className="table table-bordered">
                <tbody>
                <tr>
                    <th>Login</th>
                </tr>
                {this.props.listOfPlayers.map((item)=> {
                    return <tr key={item.player_id}>
                        <td>{item.login}</td>
                    </tr>
                })}
                </tbody>
            </table>
        );
    };

    render(){
        return(
            <div>
                {this.renderTable()}
            </div>
        )
    }
}

export default MafTable;