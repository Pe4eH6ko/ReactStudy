import React from 'react';
import './Carousel.scss';

class Carousel extends React.Component{
    render(){
        return(
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 carousel-image" src={require('./img/html.jpg')} alt="First slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-image" src={require('./img/css.png')} alt="Second slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-image" src={require('./img/bootstrap.png')} alt="Third slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-image" src={require('./img/Java.png')} alt="Third slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-image" src={require('./img/react.png')} alt="Third slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-image" src={require('./img/git.png')} alt="Third slide"></img>
                    </div>
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
                <p className = "image-title">BLABLA</p>
            </div>
        )
    }
}

export default Carousel;
