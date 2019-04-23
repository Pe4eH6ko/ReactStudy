import React from 'react';
import Carousel from './Carousel';
import "./MainPart.scss"

class MainPart extends React.Component{
    render(){
        return (
            <div className="justify-content-center mainPart">
                <div className = "justify-content-center mainHead">
                    <h1 id="headerPart">WELCOME</h1>
                    <p className="mainP">TO MY PORTFOLIO</p>    
                </div>
                <Carousel />
                <div className = "justify-content-center mainGreeting">
                    <h3>"HELLO, I AM IVAN POTURNAK <br></br> AND THERE ARE MY MAIN SKILLS."</h3>
                </div>
            </div>    
        )
    }
}

export default MainPart;