import React from 'react';
import './content.css';
import Header from './components/header';
import MainView from './components/mainView/mainView';
import Footer from './components/footer';

class Content extends React.Component{
    render() {
        return (
            <div id='content'>
                <Header/>
                <MainView/>
                <Footer/>
            </div>
        );
    }
}

export default Content;