import React from 'react';
import './Blog.scss';
import Article from './Article.js';

class Blog extends React.Component{

    constructor(props){
        super(props);
        this.articleDate = new Date()
        this.state = {
            elements:[
                {imgSrc: require("./img/img-1.png"), imgAlt: 'wedding', header: 'MY WEDDING', date: 'SEP 24, 2017', text: 'article/wedding.txt'}    
            ]
        }  
    }

    changeText() {
        var link = document.getElementById("showAll");
        link.firstChild.innerText = "NOTHING ELSE";
    }

    render(){
        const elements = this.state.elements
        return(
            <div className = "blogPart" id="blog">
                <div className = "blog-head">
                    <h1>MY BLOG</h1>
                    <p>NEWS FROM MY LIFE</p>
                </div>
                <div className = "blogs">
                    <Article
                        imgSrc={elements[0].imgSrc}
                        imgAlt={elements[0].imgAlt}
                        header={elements[0].header}
                        date={elements[0].date}
                        text={elements[0].text}
                    />
                    {/* <div className="card mb-3 first">
                        <div className="row no-gutters story">
                            <div className="col-md-4">
                                <img src={require("./img/img-1.png")} className="card-img" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body news-text">
                                    <h5 className="card-title">MY WEDDING</h5>
                                    <p className = "card-text card-date">SEP 24, 2017//ADMIN/FUN/FRIENDS/WEDDING</p>
                                    <p className="card-text story-text">It was best day of my life. We celebrate all night. My wife was, is and have been the most beautiful girl on the world. Later we went to Egypt but it is another story=)</p>                                   
                                </div>
                             </div>
                        </div>
                    </div>     */}
                </div>
                <a href="javascript:void(0)" onClick={this.changeText} id="showAll"><p className="showAll">SHOW ALL POSTS</p></a>    
            </div>
        )
    }
}

export default Blog;