import React from 'react';
import Carousel from './Carousel';
import "./MainPart.scss"

class MainPart extends React.Component{
    render(){
        return (
            <div className="justify-content-center mainPart">
                <div className = "justify-content-center mainHead">
                    <h1 id="headerPart">Retro</h1>
                    <p className="mainP">MY PERSONAL PORTFOLIO</p>    
                </div>
                <Carousel />
                <div className = "justify-content-center mainGreeting">
                    <h3>"HELLO, I AM IVAN POTURNAK <br></br> WELCOME TO MY PORTFOLIO."</h3>
                </div>
            </div>    
        )
    }
}

export default MainPart;