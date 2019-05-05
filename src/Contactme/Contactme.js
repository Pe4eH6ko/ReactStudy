import React from 'react';
import "./Contactme.scss";
import $ from 'jquery';

class Contactme extends React.Component{

    sendForm(){
        $.post("sendFrom.php", $.get("#myForm").serialize(),function(data){
            alert("Your Message Send!");
        }, "json");
    }
    render(){
        return(
            <div className="contactmePart" id="contactme">
                <div className = "contact-head">
                    <h1>CONTACT ME</h1>
                    <p>I'LL BE GLAD ANSWER YOUR QUESTIONS!</p>
                </div> 
                <form className="formPart" id="myForm">
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
                        <a href="https://twitter.com/Pe4eH6ko" className="fa fa-twitter ico"></a>
                        <a href="https://www.facebook.com/Pe4eH6ko" className="fa fa-facebook-square ico"></a>
                        <a href="https://github.com/Pe4eH6ko" className="fa fa-github ico"></a>
                        <a href="https://www.instagram.com/pe4eh6ko/?hl=uk" className="fa fa-instagram ico"></a>
                        <a href="https://www.linkedin.com/in/ivan-poturnak-2027a7176/" className="fa fa-linkedin ico"></a>
                    </div>
                </div>               
            </div>
        )
    }
}

export default Contactme;