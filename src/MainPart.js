import React from 'react';
import Carousel from './Carousel';
import "./MainPart.scss"

class MainPart extends React.Component{
    render(){
        return (
            <div className="justify-content-center mainPart">
                <div className = "justify-content-center mainHead">
                    <h1 id="">Retro</h1>
                    <p>Portfolio</p>    
                </div>
                <Carousel />
                <div className = "justify-content-center mainGreeeting">
                    <h3>HELLO, I AM IVAN POTURNAK</h3>
                    <h4>WELCOME TO MY PORTFOLIO</h4>
                </div>
            </div>    
        )
    }
}

export default MainPart;