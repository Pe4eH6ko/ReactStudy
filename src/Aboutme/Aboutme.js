import React from 'react';
import "./Aboutme.scss";
import $ from 'jquery';


class Aboutme extends React.Component{
    constructor(props){
        super(props); 
        this.makeText = this.makeText.bind(this);
        this.state = {
            elements:[
                {src:require('./img/movies.png'), alt:'movies', text: require('./text/movies.txt'), word:'WATCH'},
                {src:require('./img/music.png'), alt:'music', text:require('./text/music.txt'), word:'LISTEN'},
                {src:require('./img/clothes.png'), alt:'clothes', text:require('./text/clothes.txt'), word:'WEAR'},
                {src:require('./img/food.png'), alt:'food', text:require('./text/food.txt'), word:'EAT'}
            ]
        }  
    }
    componentDidMount(){
        this.setState({elements: this.state.elements});
        window.addEventListener('load', this.makeText);
    }
    makeText(){
        var text;
        var paragraf = document.getElementsByClassName('text');
        const story = this.state.elements;
        story.map((elements, j) =>
            $.ajax({
                url: elements.text,
                dataType:"text",
                success: function(data){
                    text = document.createTextNode(data);
                    paragraf[j].appendChild(text); 
                }
            })
        )
    }
    render(){
        return(
            <div className = "aboutPart" id="aboutme">
                <div className = "about-head">
                    <h1 className="head">ABOUT ME</h1>
                    <p>I AM A WEB DEVELOPER FROM FRANKIVSK</p>
                </div>
                <div className="container aboutText">
                    <div className="row parts">
                        {this.state.elements.map((div,i) =>
                            <div className='col-md-3 about-column' key={i}>
                                <img className='about-image' src={div.src} alt={div.alt}></img>
                                <h2>{div.alt.toUpperCase()}</h2>
                                <h5>WHAT I {div.word}</h5>
                                <p className='text'></p> 
                            </div>
                        )}                                                             
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme;