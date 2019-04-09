import React from 'react';

function Navbar () {
        return (
            <nav className ="navbar fixed-top navbar-expand-lg justify-content-center">
                <div className="justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">ABOUT ME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className = "navbar-brand nav-link" href="#">IP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">MY BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT ME</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

export default Navbar;