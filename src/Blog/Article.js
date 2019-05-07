import React from 'react';

function Article(props) {
    return(
        <div className="card mb-3 first">
            <div className="row no-gutters story">
                <div className="col-md-4">
                    <img src={props.imgSrc} className="card-img" alt={props.imgAlt}></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body news-text">
                        <h5 className="card-title">{props.header}</h5>
                        <p className = "card-text card-date">{props.date}</p>
                        <p className="card-text story-text">{props.text}</p>                                   
                    </div>
                </div>
            </div>
        </div> 
    )       
}

export default Article;