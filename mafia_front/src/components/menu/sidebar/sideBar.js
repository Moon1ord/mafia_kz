import React from 'react';
import GamePanel from './game/gamePanel';
import './sideBar.css';

class SideBar extends React.Component{
    render() {
        return (
            <div id='sideBar'>
                <GamePanel/>
            </div>
        );
    }
}

export default SideBar