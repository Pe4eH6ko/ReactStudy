import React from 'react';

class Contactme extends React.Component{
    render(){
        return(
            <div classNameName="contactmePart">
                <div classNameName = "contact-head">
                    <h1>CONTACT ME</h1>
                    <p>I'LL BE GLAD ANSWER YOUR QUESTIONS!</p>
                </div> 
                <form>
                    <div class="form-group">
                        <label for="formGroupExampleInput"></label>
                        <input type="text" class="form-control" id="exampleInputName" placeholder="Name"></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1"></label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email addres"></input>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput"></label>
                        <input type="text" class="form-control" id="exampleInputName" placeholder="Subject"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1"></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Massage</button>
                </form>               
            </div>
        )
    }
}

export default Contactme;