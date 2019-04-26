import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.scss';
import NavBarElement from './NavBarElement';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            elements: [
                {text: 'ABOUT ME', href:'#aboutMe', key='1'},
                {text: 'PORTFOLIO', href:'#portfolio', key='2'},
                {text: 'BLOG', href:'#blog', key='3'},
                {text: 'CONTACT ME', href:'#contactme', key='4'}          
            ],
            linkClass: 'nav-link element',
            liClass: 'justify-content-center nav-item'
        };
    }
render() {
        return (
            <nav className ="navbar fixed-top navbar-expand-lg justify-content-center myMenu">
                <div className="justify-content-center">               
                     <ul className="justify-content-center navbar-nav menuBlock" id="menu">
                    
                        {/* <li className="justify-content-center nav-item">
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
                        </li>  */}
                    </ul> 
                </div>
            </nav>
        )
    }
}
export default Navbar;