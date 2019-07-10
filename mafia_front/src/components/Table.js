import React from 'react';

class Table extends React.Component{

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.listOfGames !== nextProps.listOfGames;
    }

    renderTable =  () => {
        return(
            <table className="table table-bordered">
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Game Date</th>
                </tr>
                {this.props.listOfGames.map((item)=> {
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.game_Date}</td>
                    </tr>
                })}
                </tbody>
            </table>
        )
    };

    render() {
        return (
            <div>
                {this.renderTable()}
            </div>
        );
    }
}

export default Table;