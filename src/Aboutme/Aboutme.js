import React from 'react';
import "./Aboutme.scss";
import $ from 'jquery';


class Aboutme extends React.Component{
    constructor(props){
        super(props); 
        this.makeText = this.makeText.bind(this);
        this.state = {
            elements:[
                {divClass:'col-md-3 about-column', imgClass:'about-image', src:require('./img/movies.png'), alt:'movies', text:'text/movies.txt', word:'WATCH'},
                {divClass:'col-md-3 about-column', imgClass:'about-image', src:require('./img/music.png'), alt:'music', text:'text/music.txt', word:'LISTEN'},
                {divClass:'col-md-3 about-column', imgClass:'about-image', src:require('./img/clothes.png'), alt:'clothes', text:'text/clothes.txt', word:'WEAR'},
                {divClass:'col-md-3 about-column', imgClass:'about-image', src:require('./img/food.png'), alt:'food', text:'text/food.txt', word:'EAT'}
            ]
        }  
    }
    componentDidMount(){
        this.setState({elements: this.state.elements});
    }
    makeText(fileAdress){
        $.ajax({
            url: fileAdress,
            dataType:"text",
            success: function(data){
                console.log(data);
            }

        });
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
                                <h2>{div.alt.toUpperCase()}</h2>
                                <h5>WHAT I {div.word}</h5>
                                <p className='text'>{this.makeText(div.text)}</p> 
                            </div>
                        )}                                                             */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme;