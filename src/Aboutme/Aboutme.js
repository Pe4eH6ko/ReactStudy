import React from 'react';
import "./Aboutme.scss";
import $ from 'jquery';


class Aboutme extends React.Component{
    constructor(props){
        super(props); 
        this.makeText = this.makeText.bind(this);
        this.state = {
            elements:[
                {divClass:'col-md-3 about-column', imgClass:'about-image', src:require('./img/movies.png'), alt:'movies', text:'G:/ReactStudy/firstwork/src/Aboutme/text/movies.txt'},
                {divClass:'col-md-3 about-column', imgClass:'about-image', src:require('./img/music.png'), alt:'music', text:'"./text/music.txt"'},
                {divClass:'col-md-3 about-column', imgClass:'about-image', src:require('./img/clothes.png'), alt:'clothes', text:'"./text/movies.txt"'},
                {divClass:'col-md-3 about-column', imgClass:'about-image', src:require('./img/food.png'), alt:'food', text:'"./text/movies.txt"'}
            ]
        }  
    }
    componentDidMount(){
        this.setState({elements: this.state.elements});
    }
    makeText(){
        $.get('movies.json', function(data){
            console.log(data)
        })
    }
    render(){
        return(
            <div className = "aboutPart">
                <div className = "about-head">
                    <h1 className="head">ABOUT ME</h1>
                    <p>I AM A WEB DEVELOPER FROM FRANKIVSK</p>
                </div>
                <div className="container aboutText">
                    <div className="row parts">
                        {this.state.elements.map((div,i) =>
                            <div className={div.divClass} key={i}>
                                <img className={div.imgClass} src={div.src} alt={div.alt}></img>
                                <h2>MOVIES</h2>
                                <h5>WHAT I WATCH</h5>
                                <p className='text'>{this.makeText()}</p> 
                            </div>
                        )}
                        {/* <div className="col-md-3 about-column">
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
                        </div>                                                             */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme;