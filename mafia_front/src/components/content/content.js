import React from 'react';
import './content.css';
import MainView from './components/mainView';

class Content extends React.Component{
    render() {
        return (
            <div id='content'>
                <MainView/>
            </div>
        );
    }
}

export default Content;