import React from 'react';

class Table extends React.Component{

    shouldComponentUpdate(nextProps) {
        return this.props.listOfPlayers !== nextProps.listOfPlayers;
    }

    renderTable =  () => {
        return(
            <table className="table table-bordered">
                <tbody>
                <tr>
                    <th>Login</th>
                    <th>Score</th>
                </tr>
                {this.props.listOfPlayers.map((item)=> {
                    return <tr key={item.player_id}>
                        <td>{item.login}</td>
                        <td>{item.score}</td>
                    </tr>
                })}
                </tbody>
            </table>
        );
    };

    render() {
        return (
            <div id="Players_Table">
                {this.renderTable()}
            </div>
        );
    }
}

export default Table;