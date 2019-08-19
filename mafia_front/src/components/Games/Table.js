import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Mafia from '../Mafia_kz/Mafia';
import $ from 'jquery';

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
                            <button className='btn btn-link' onClick={() => 
                            this.props.deleteGameMethod(item.id)}>Delete</button>
                            <Link to={{
                                pathname : '/api/game/getgame/' + item.id,
                                state : {
                                    game_id : item.id
                                }}
                            } onClick={() => {$('#Mafia').show();}}>Open</Link>
                        </td>
                </tr>
                    })}
                    </tbody>
                </table>
                    
                <Switch>
                    <Route path={'/api/game/getgame/:gameId'} 
                    component={Mafia}/>
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