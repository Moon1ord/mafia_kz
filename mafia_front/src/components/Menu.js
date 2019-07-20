import React from 'react';
import $ from 'jquery';
import './Menu.css';

class Menu extends React.Component{

    togglemenu = (e) => {
        let menuComponents = document.getElementsByClassName('menuComponent');
        Array.from(menuComponents).forEach(element=>{
            if(element.id === e.target.value){
                if($(element).is(":visible")){
                    $(element).hide();
                }else{
                    $(element).show();
                }
            }else{
                $(element).hide();
            }
        });
    }

    render(){
        return(
            <div id="Menu">
                <button value="Game" onClick={this.togglemenu}>
                    Games
                </button>
                <button value="Players" onClick={this.togglemenu}>
                    Players
                </button>
            </div>
        )
    }
}

export default Menu;