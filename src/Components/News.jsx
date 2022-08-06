import React, { Component } from "react";
import Loader from "./Loader";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types';

export class News extends Component {

    PropTypes = {
        country : PropTypes.string,
        pageSize: PropTypes.number,
        category : PropTypes.string,
    }


    captializeFirstletter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);  //! always have to write it 
        this.state = {
            articles: [],
            loading: false,
        }
        document.title = `${this.captializeFirstletter(this.props.category)} - Infinity News`;
    }

    //? a life cycle method
    async componentDidMount(){   //?it runs atlast 
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=131d3579b4f344688a7b9aa56d10c40b&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData);
        this.setState({articles: parsedData.articles, 
            totalArticles: parsedData.totalResults
            })
    }

 


    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center">Top  {this.captializeFirstletter(this.props.category)} Headlines</h2>
                {this.state.loading && <Loader/>}
                <div className="row  ">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return (
                        <div className="col-md-4 " key={element.url}>
                        <Newsitem  title={element.title?element.title : ""} description={element.description ? element.description:""} 
                        imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}
                        source={element.source.name} />
                        </div>
                    )
                })}

                </div>
            </div>
        );
    }
}

export default News;
