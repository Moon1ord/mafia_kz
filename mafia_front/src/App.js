import React from 'react';
import './App.css';
import Menu from './components/menu/menu';
import Content from './components/content/content';

class App extends React.Component{
    render() {
        return (
            <div className="App">
                <Menu />
                <Content/>
            </div>
        );
    }
}

export default App;
