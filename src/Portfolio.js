import React from 'react';
import './Portfolio.scss';

class Portfolio extends React.Component{
    render(){
        return(
            <div className="portfolioPart">
                <div className = "about-head">
                    <h1 className="head">PORTFOLIO</h1>
                    <p>SIMPLICITY IS THE ULTIMATE SOPHISTICATION</p>
                </div>
                <div className="row myWorks">
                    <div className="col-md-4 card workPage">
                        <a><img src="" className="card-img-top" alt="..."></img></a>
                        <div className="card-body">
                            <p className="card-text">My portfolio</p>
                        </div>
                    </div>
                    <div className="col-md-4 card workPage">
                        <a><img src="" className="card-img-top" alt="..."></img></a>
                        <div className="card-body">
                            <p className="card-text">My portfolio</p>
                        </div>
                    </div>
                    <div className="col-md-4 card workPage">
                        <a><img src="" className="card-img-top" alt="..."></img></a>
                        <div className="card-body">
                            <p className="card-text">My portfolio</p>
                        </div>
                    </div>
                    <div className="col-md-4 card workPage">
                        <a><img src="" className="card-img-top" alt="..."></img></a>
                        <div className="card-body">
                            <p className="card-text">My portfolio</p>
                        </div>
                    </div>
                    <div className="col-md-4 card workPage">
                        <a><img src="" className="card-img-top" alt="..."></img></a>
                        <div className="card-body">
                            <p className="card-text">My portfolio</p>
                        </div>
                    </div>
                    <div className="col-md-4 card workPage">
                        <a><img src="" className="card-img-top" alt="..."></img></a>
                        <div className="card-body">
                            <p className="card-text">My portfolio</p>
                        </div>
                    </div> 
                </div>                                                                             
            </div>
        )
    }
}

export default Portfolio;