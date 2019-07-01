import React from 'react';
import './menu.css';
import Sidebar from './components/sidebar';

class Menu extends React.Component{
    render() {
        return (
            <div id="menu">
                <Sidebar/>
            </div>
        );
    }
}

export default Menu;