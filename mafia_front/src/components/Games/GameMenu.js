import React from 'react';

class GameMenu extends React.Component{
    render() {
        return (
            <div id="Game_menu">
                <p>
                    <a className="btn btn-dark" data-toggle="collapse" href="#collapseGame" role="button"
                       aria-expanded="false" aria-controls="collapseExample">
                        options
                    </a>
                </p>
                <div className="collapse" id="collapseGame">
                    <div className="card card-body">
                        <button className="btn btn-dark" onClick={this.props.createGameMethod}>create game</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameMenu;