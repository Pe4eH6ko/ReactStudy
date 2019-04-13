import React from 'react';
import "./Aboutme.scss";

class Aboutme extends React.Component{
    render(){
        return(
            <div className = "aboutPart">
                <div className = "about-head">
                    <h1 className="head">ABOUT ME</h1>
                    <p>I AM A WEB DEVELOPER FROM FRANKIVSK</p>
                </div>
                <div className="container aboutText">
                    <div className="row parts">
                        <div className="col-md-3 about-column">
                            <img className="about-image" src={require('./img/movies.png')} alt="movies"></img>
                            <h2>MOVIES</h2>
                            <h5>WHAT I WATCH</h5>
                            <p>An American government organisation has 35 reports from 2010–2019. 
                                These reports show that people have seizures after they use e-cigarettes.
                                An American government organisation has 35 reports from 2010–2019. 
                                These reports show that people have seizures after they use e-cigarettes.</p>
                        </div>
                        <div className="col-md-3 about-column">
                            <img className="about-image" src={require('./img/music.png')} alt="music"></img>
                            <h2>MUSIC</h2>
                            <h5>WHAT I LISTEN</h5>
                            <p>An American government organisation has 35 reports from 2010–2019. 
                                These reports show that people have seizures after they use e-cigarettes.
                                An American government organisation has 35 reports from 2010–2019. 
                                These reports show that people have seizures after they use e-cigarettes.</p>
                        </div>
                        <div className="col-md-3 about-column">
                            <img className="about-image" src={require('./img/clothes.png')} alt="clothes"></img>
                            <h2>CLOTHES</h2>
                            <h5>WHAT I WEAR</h5>
                            <p>An American government organisation has 35 reports from 2010–2019. 
                                These reports show that people have seizures after they use e-cigarettes.
                                An American government organisation has 35 reports from 2010–2019. 
                                These reports show that people have seizures after they use e-cigarettes.</p>
                        </div>
                        <div className="col-md-3 about-column">
                            <img className="about-image" src={require('./img/food.png')} alt="food"></img>
                            <h2>FOOD</h2>
                            <h5>WHAT I EAT</h5>
                            <p>An American government organisation has 35 reports from 2010–2019. 
                                These reports show that people have seizures after they use e-cigarettes.
                                An American government organisation has 35 reports from 2010–2019. 
                                These reports show that people have seizures after they use e-cigarettes.</p>
                        </div>                                                            
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme;