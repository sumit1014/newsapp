import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import "./mystyle.css";
export class News extends Component {
  static defaultProps = {
      country : 'us',
      category : 'general',
  }
  static propTypes = {
    country : PropTypes.string,
    category : PropTypes.string,
  }
  constructor(props){
    super(props);
    console.log("hello there")
    this.state = {
        articles : [],
        loading : false,
        page:1
    }
    document.title = this.props.category;
  }

  async updateNews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=9`;
      let data = await fetch(url);
      this.props.setProgress(30);
      let parsedData = await data.json()
      this.props.setProgress(70);
      console.log(parsedData)
      this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
      this.props.setProgress(100);

  }

  async componentDidMount(){
    this.updateNews()
  }

  handlePrevClick = async ()=>{
    this.setState({page:this.state.page-1})
    this.updateNews()
  }
  handleNextClick = async ()=>{
    console.log("next");
    this.setState({page:this.state.page+1})
    this.updateNews()
  }
  render() {
    return (
      <div className="container my-3 text-start">
        <h2 className="healine">Daily News - Top {this.props.category} headlines</h2>
        <div className="row g-3">
          {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <Newsitem title={element.title} description={element.description?element.description.slice(0,90):""} imgurl={element.urlToImage} newsurl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
          </div>
          })}   
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; previous</button>

          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/9)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>next &rarr;
          </button>
        </div>
      </div>
    )
  }
}

export default News
