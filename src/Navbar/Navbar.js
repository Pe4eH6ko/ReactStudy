import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.scss';


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            elements: [
                {text: 'ABOUT ME', href:'#aboutme', key:'1', linkClass: 'nav-link element', liClass: 'justify-content-center nav-item'},
                {text: 'PORTFOLIO', href:'#portfolio', key:'2', linkClass: 'nav-link element', liClass: 'justify-content-center nav-item'},
                {text: 'BLOG', href:'#blog', key:'3', linkClass: 'nav-link element', liClass: 'justify-content-center nav-item'},
                {text: 'CONTACT ME', href:'#contactme', key:'4', linkClass: 'nav-link element', liClass: 'justify-content-center nav-item'}          
            ]  
        }
    }
    componentDidMount(){
        this.setState({elements: this.state.elements});
    }
render() {
        return (
            <nav className ="navbar fixed-top navbar-expand-lg justify-content-center myMenu">
                <div className="justify-content-center">               
                     <ul className="justify-content-center navbar-nav menuBlock" id="menu">
                        {this.state.elements.map((li, i) => 
                            <li className = {li.liClass} key={i}>
                                <a className = {li.linkClass} href={li.href} key={i}>{li.text}</a>    
                            </li>)}
                    </ul> 
                </div>
            </nav>
        )
    }
}
export default Navbar;