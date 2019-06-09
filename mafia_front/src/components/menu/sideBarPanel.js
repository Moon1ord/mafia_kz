import React from 'react';
import './sideBarPanel.css';
import GamePanel from './game/game_panel';
import StatsPanel from './stats/stats_panel';
import $ from 'jquery';

class SideBarPanel extends  React.Component{

   toggle_menu(){
        let buttons = document.getElementsByClassName('menu_button');

        if(buttons[0].style.display === 'none'){
            $('.menu_button').show();
        }else{
            $('.menu_button').hide();
        }
    };

    render() {
        return (
            <div className='sidebar'>
                <button id='toggle_button' onClick={this.toggle_menu}>Mafia KZ</button>
                <GamePanel/>
                <StatsPanel/>
            </div>
        );
    };
}

export  default SideBarPanel;
