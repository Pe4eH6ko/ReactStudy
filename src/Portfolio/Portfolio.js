import React from 'react';
import './Portfolio.scss';

class Portfolio extends React.Component{
    changeText() {
        var link = document.getElementById("seeAll");
        var text = link.firstChild.innerText = "NOTHING ELSE";
        console.log(text);
    }
    render(){
        return(
            <div className="portfolioPart">
                <div className = "about-head">
                    <h1 className="head">PORTFOLIO</h1>
                    <p>SIMPLICITY IS THE ULTIMATE SOPHISTICATION</p>
                </div>
                <div className="row myWorks">
                    <div className="col-md-4 card workPage">
                        <a href="./App.js" className="worksHref">
                            <img src={require('./img/web-1.png')} className="card-img-top worksImage" alt="First work"></img>
                            <div className="card-body worksName">
                                <p className="card-text">MY PORTFOLIO</p>
                            </div>
                        </a>
                    </div>        
                    <div className="col-md-4 card workPage">
                        <a href="" className="worksHref">
                            <img src={require('./img/Pacman-1.gif')} className="card-img-top worksImage packman" alt="Coming soon"></img>
                            <div className="card-body worksName">
                                <p className="card-text">COMING SOON</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4 card workPage">
                        <a href="" className="worksHref">
                            <img src={require('./img/Pacman-1.gif')} className="card-img-top worksImage packman" alt="Coming soon"></img>
                            <div className="card-body worksName">
                                <p className="card-text">COMING SOON</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4 card workPage">
                        <a href="" className="worksHref">
                            <img src={require('./img/Pacman-1.gif')} className="card-img-top worksImage packman" alt="Coming soon"></img>
                            <div className="card-body worksName">
                                <p className="card-text">COMING SOON</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4 card workPage">
                        <a href="" className="worksHref">
                            <img src={require('./img/Pacman-1.gif')} className="card-img-top worksImage packman" alt="Coming soon"></img>
                            <div className="card-body worksName">
                                <p className="card-text">COMING SOON</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4 card workPage">
                        <a href="" className="worksHref">
                            <img src={require('./img/Pacman-1.gif')} className="card-img-top worksImage packman" alt="Coming soon"></img>
                            <div className="card-body worksName">
                                <p className="card-text">COMING SOON</p>
                            </div>
                        </a>
                    </div> 
                </div>
                <a href="javascript:void(0)" id="seeAll" ref="seeAll" onClick={this.changeText}><p>SEE ALL...</p></a>                                                                             
            </div>
        )
    }
}

export default Portfolio;