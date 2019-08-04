import React from 'react';
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';
import Mafia from '../Mafia_kz/Mafia';

class Table extends React.Component{

    shouldComponentUpdate(nextProps) {
        return this.props.listOfGames !== nextProps.listOfGames;
    }

    renderTable = () => {
        return(
            <BrowserRouter>
                <table className="table table-bordered">
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Game Date</th>
                    <th>Actions</th>
                </tr>
                    {this.props.listOfGames.map((item)=> {
                        return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.game_Date}</td>
                        <td>
                            <button onClick={() => 
                            this.props.deleteGameMethod(item.id)}>Delete</button>
                            <Link to={'/api/game/getgame/' + item.id}> Redirect</Link>
                        </td>
                </tr>
                    })}
                    </tbody>
                </table>
                    
                <Switch>
                    <Route path={'/api/game/getgame/:gameId'} component={Mafia}></Route>
                </Switch>
            </BrowserRouter>
        );
    };

    render() {
        return (
            <div id="Game_Table">
                {this.renderTable()}
            </div>
        );
    }
}

export default Table;