import React from 'react';
import $ from 'jquery';

class GameButton extends React.Component{

    createGame(e){
        let url = "https://localhost:5001/api/game/";
        let now = new Date();
        e.preventDefault();
        $.post(url, {
            Game_Date : now.toDateString()
        });
    }

    render() {
        return (
            <div>
                <div className="btn-group dropright">
                    <button type="button" className="menuButton btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                        Game
                    </button>
                    <div className="dropdown-menu">
                        <button onClick={this.createGame} className='dropdown-item'>create game</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameButton;