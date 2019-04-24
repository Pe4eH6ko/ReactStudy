import React from 'react';
import './Navbar.scss';
import NavBarElement from './NavBarElement';

class Navbar extends React.Component{
    state: {
        elements: [
            {text: 'ABOUT ME', href:'#aboutMe'},
            {text: 'PORTFOLIO', href:'#portfolio'},
            {text: 'BLOG', href:'blog'},
            {text: 'CONTACT ME', href:'contactme'}          
        ],
        linkClass: 'nav-link element',
        liClass: 'justify-content-center nav-item'
    }

    makeMenu() {
        var menu = document.getElementById("menu");
        var elCounts = this.state.elements.length;
        console.log(elCounts);
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