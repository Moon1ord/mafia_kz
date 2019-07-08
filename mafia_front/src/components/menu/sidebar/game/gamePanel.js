import React from 'react';
import './gamePanel.css';

class GamePanel extends React.Component{
    render() {
        return (
            <div id='gamePanel' className='menuButton'>
                <button>Game</button>
            </div>
        );
    }
}

export default GamePanel;