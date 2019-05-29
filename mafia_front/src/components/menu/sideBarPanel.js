import React from 'react';
import './sideBarPanel.css';
import GamePanel from './game/game_panel';
import StatsPanel from './stats/stats_panel';

class SideBarPanel extends  React.Component{
    render() {
        return (
            <div className='sidebar'>
                <button className='menu_button' id='toggle_button' disabled='disabled'>Mafia KZ</button>
                <GamePanel/>
                <StatsPanel/>
            </div>
        );
    }
}

export  default SideBarPanel;
