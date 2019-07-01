import React from 'react';
import GameButton from './buttons/game';


class Sidebar extends React.Component{
    render() {
        return (
            <div id="sideMenu" >
                <GameButton/>
            </div>
        );
    }
}

export default Sidebar;