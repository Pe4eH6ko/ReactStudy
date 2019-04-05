import React from 'react';

class Navbar extends Component {
    function () {
        return (
            <div className ="navbar fixed-top">
                <div className="justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">ABOUT ME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <img src={logo} className ="App-logo" alt="logo"><a className = "navbar-brand nav-link" href="#">IP</a></img>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">MY BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT ME</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;