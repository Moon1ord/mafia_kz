import React from 'react';

class Menu extends React.Component{
    render() {
        return (
            <div>
                <button onClick={this.props.createGameMethod}>create game</button>
            </div>
        );
    }
}

export default Menu;