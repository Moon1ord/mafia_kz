import React from 'react';

class PlayersMenu extends React.Component{
    render() {
        return (
            <div id="Players_menu">
                <p>
                    <a className="btn btn-dark" data-toggle="collapse" href="#collapsePlayers" role="button"
                       aria-expanded="false" aria-controls="collapseExample">
                        Players
                    </a>
                </p>
                <div className="collapse" id="collapsePlayers">
                    <div className="card card-body">
                        <button className="btn btn-dark" onClick={this.props.createPlayerMethod}>create player</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayersMenu;