import React from 'react';
import $ from 'jquery';

class MainView extends React.Component{
    
    componentDidMount() {
        let url = "https://localhost:5001/api/game/";
        $.get(url).done(function(data){
            alert(data);
            }
        );
        
    }

    render() {
        return (
            <div id='mainView'>
                
            </div>
        );
    }
}

export default MainView;