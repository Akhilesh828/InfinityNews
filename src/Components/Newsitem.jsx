import React, { Component } from "react";
import unknowImage from "../img/unknow.jpeg"

export class Newsitem extends Component {

    render() {
        let {title, description, imgUrl, newsUrl, author, date, source} = this.props;
        return (
            <>
                <div className="my-3 ">
                <span class="badge bg-info text-dark">{source}</span>
                <div className="card " >
                    <img src={imgUrl? imgUrl:unknowImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title.substr(0,85)}...</h5>
                        <p className="card-text">{description.substr(0,150)}....
                        </p>
                        <p className="card-text"><small className="text-muted">By {author?author : "Unknown"} on {date}</small></p>
                        <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
                            Read More
                        </a>
                    </div>
                </div>
                </div>
            </>
        );
    }
}

export default Newsitem;
