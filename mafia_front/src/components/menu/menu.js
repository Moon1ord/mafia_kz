import React from 'react';
import './menu.css';
import GameButton from './components/sidebar';

class Menu extends React.Component{
    render() {
        return (
            <div id="menu">
                <GameButton/>
            </div>
        );
    }
}

export default Menu;