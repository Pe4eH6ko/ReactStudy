import React from 'react';
import "./Contactme.scss";

class Contactme extends React.Component{
    render(){
        return(
            <div className="contactmePart">
                <div className = "contact-head">
                    <h1>CONTACT ME</h1>
                    <p>I'LL BE GLAD ANSWER YOUR QUESTIONS!</p>
                </div> 
                <form className="formPart">
                    <div className="form-group form-parts">
                        <label htmlFor="formGroupExampleInput"></label>
                        <input type="text" className="form-control" id="exampleInputName" placeholder="Name"></input>
                    </div>
                    <div className="form-group form-parts">
                        <label htmlFor="exampleInputEmail1"></label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email addres"></input>
                    </div>
                    <div className="form-group form-parts">
                        <label htmlFor="formGroupExampleInput"></label>
                        <input type="text" className="form-control" id="exampleInputName" placeholder="Subject"></input>
                    </div>
                    <div className="form-group form-parts">
                        <label htmlFor="exampleFormControlTextarea1"></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Massage</button>
                </form>
                <div className="socialPart">
                    <p>I AM SOCIAL</p>
                    <div className="socialIcons">
                        <a href="" className="fa fa-twitter ico"></a>
                        <a href="" className="fa fa-facebook-square ico"></a>
                        <a href="" className="fa fa-github ico"></a>
                        <a href="" className="fa fa-instagram ico"></a>
                        <a href="" className="fa fa-linkedin ico"></a>
                    </div>
                </div>               
            </div>
        )
    }
}

export default Contactme;