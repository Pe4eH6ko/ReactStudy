import React from 'react';
import './Portfolio.scss';

class Portfolio extends React.Component{
    // constructor(props){
    //     super(props);

    //     this.changeText = this.changeText.bind(this);
    // }
    // changeText() {
    //     var element = React.findDOMNode(this.refs.seeAll);
    //     console.log(element);
    //     //.childNodes.innerText("Nothing yet =)")
    // }
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
                <a href="" id="seeAll" ref="seeAll" /*onClick={this.changeText()}*/><p>SEE ALL...</p></a>                                                                             
            </div>
        )
    }
}

export default Portfolio;