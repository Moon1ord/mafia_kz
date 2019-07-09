import React from 'react';
import GameTables from './gamesTable';

class MainView extends React.Component{

    render() {
        return (
            <div id='mainView'>
                <GameTables/>
            </div>
        );
    }
}

export default MainView;