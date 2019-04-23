import React from 'react';
import './Navbar.scss';
class Navbar extends React.Component{
render() {
        return (
            <nav className ="navbar fixed-top navbar-expand-lg justify-content-center myMenu">
                <div className="justify-content-center">
                    <ul className="justify-content-center navbar-nav menuBlock">
                        <li className="justify-content-center nav-item">
                            <a className="nav-link element" href="#">ABOUT ME</a>
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