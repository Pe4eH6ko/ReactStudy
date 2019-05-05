import React from 'react';
import './Portfolio.scss';

class Portfolio extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            elements:[
                {divClass:'col-md-4 card workPage', aHref:'./App.js', linkClass: 'worksHref', src: require('./img/web-1.png'),imgClass:'card-img-top worksImage', alt:'First work', cardBodyclass:'card-body worksName', pClass:'card-text', text:'MY PORTFOLIO'},
                {divClass:'col-md-4 card workPage', aHref:'javascript:void(0)', linkClass: 'worksHref', src: require('./img/Pacman-1.gif'),imgClass:'card-img-top worksImage packman', alt:'Coming soon', cardBodyclass:'card-body worksName', pClass:'card-text', text:'COMING SOON'}
            ]
        }  
    }
    componentDidMount(){
        this.setState({elements: this.state.elements});
    }
    changeText() {
        var link = document.getElementById("seeAll");
        var text = link.firstChild.innerText = "NOTHING ELSE";
    }
    render(){
        return(
            <div className="portfolioPart">
                <div className = "about-head">
                    <h1 className="head">PORTFOLIO</h1>
                    <p>SIMPLICITY IS THE ULTIMATE SOPHISTICATION</p>
                </div>
                <div className="row myWorks">
                    {this.state.elements.map((div,i)=>
                        <div className={div.divClass}>
                        <a href={div.aHref} className={div.linkClass}>
                            <img src={div.src} className={div.imgClass} alt={div.alt}></img>
                            <div className={div.cardBodyclass}>
                                <p className={div.pClass}>{div.text}</p>
                            </div>
                        </a>
                    </div>            
                    )}
                </div>
                <a href="javascript:void(0)" id="seeAll" ref="seeAll" onClick={this.changeText}><p>SEE ALL...</p></a>                                                                             
            </div>
        )
    }
}

export default Portfolio;