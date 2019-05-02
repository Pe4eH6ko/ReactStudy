import React from 'react';
import ReactDOM from 'react-dom';
import './Carousel.scss';

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.getName = this.getName.bind(this); 
        this.state = {
            elements:[
                {divClass: 'carousel-item active', imgClass: 'd-block w-100 carousel-image', src:require('./img/html.jpg'), alt: 'First slide', title:'HTML'},
                {divClass: 'carousel-item', imgClass: 'd-block w-100 carousel-image', src:require('./img/css.png'), alt:'Second slide', title:'CSS'},
                {divClass: 'carousel-item', imgClass: 'd-block w-100 carousel-image', src:require('./img/bootstrap.png'), alt: 'Third slide', title:'BOOTSTRAP'},
                {divClass: 'carousel-item', imgClass: 'd-block w-100 carousel-image', src:require('./img/Java.png'), alt: 'Fourth slide', title:'JS'},
                {divClass: 'carousel-item', imgClass: 'd-block w-100 carousel-image', src:require('./img/react.png'), alt: 'Fifth slide', title:'REACT'},
                {divClass: 'carousel-item', imgClass: 'd-block w-100 carousel-image', src:require('./img/git.png'), alt: 'Six slide', title:'GIT'}
            ]
        }  
    }
    componentDidMount(){
        this.setState({elements: this.state.elements});
        window.addEventListener('load', this.getName);
    }
    getName(){
        $(function(){
            var activeDiv = $('.active');
            var childNodeOfDiv = activeDiv.$(:first-child)
        });
    }
    render(){
        return(
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {this.state.elements.map((div, i) =>
                        <div className = {div.divClass}>
                            <img className={div.imgClass} src={div.src} alt={div.alt} title={div.title}></img>
                        </div>)}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only halfCircleone">Previous</span>
                    <div className="half-left"></div>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only halfCircletwo">Next</span>
                    <div className="half-right"></div>
                </a>
                <p className = "image-title" ref="result"></p>
            </div>
        )
    }
}

export default Carousel;
