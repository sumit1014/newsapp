import React, { Component } from 'react'
import "./mystyle.css";
export class Newsitem extends Component {
  render() {
    let {title, description ,imgurl ,newsurl,author,date,source}= this.props;
    return (
      <div>
       <div className="card shadow">
            <img src={!imgurl?"https://hackaday.com/wp-content/uploads/2016/01/darkarts.jpg":imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h6 className="card-title">{title}...</h6>
                <span className="badge text-bg-success">{source}</span>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-danger">Click here to Read more...</a> 
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
