import React from 'react';
import './Navbar.scss';
import NavBarElement from './NavBarElement';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            elements: [
                {text: 'ABOUT ME', href:'#aboutMe'},
                {text: 'PORTFOLIO', href:'#portfolio'},
                {text: 'BLOG', href:'#blog'},
                {text: 'CONTACT ME', href:'#contactme'}          
            ],
            linkClass: 'nav-link element',
            liClass: 'justify-content-center nav-item'
        };
        this.makeMenu = this.makeMenu.bind(this);
    }

    makeMenu() {
        var menu = document.getElementById("menu");
        var elCounts = this.state.elements.length;
        for(var i = 0; i < elCounts; i++){
            var liElement = React.createElement(
                '<NavBarElement />', 
                [linkClass=this.linkClass, liClass=this.liClass, href={href[i]}, text={text[i]}]
            console.log(liElement);    
        }
        
        
    }

render() {

        const elements = this.state.elements;
        const link = this.state.linkClass;
        const li = this.state.liClass;

        return (
            <nav className ="navbar fixed-top navbar-expand-lg justify-content-center myMenu">
                <div className="justify-content-center">
                    <ul className="justify-content-center navbar-nav menuBlock" id="menu">
                        <li className="justify-content-center nav-item">
                            <a className="nav-link element" href="#" onClick={this.makeMenu}>ABOUT ME</a>
                        </li>
                        <li className="justify-content-center nav-item">
                            <a className="nav-link element" href="#">PORTFOLIO</a>
                        </li>
                        <li className="justify-content-center nav-item">
                            <a className="nav-link element" href="#">MY BLOG</a>
                        </li>
                        <li className="justify-content-center nav-item ">
                            <a className="nav-link element" href="#">CONTACT ME</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;