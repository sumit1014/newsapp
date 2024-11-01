import React, { Component } from 'react'
import {Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return ( 
      <div>
        <nav className="navbar navbar-expand-lg fixed-top bg-warning">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">DailyNews.com</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/General">General</Link>
                        <Link className="nav-link" to="/Business">Business</Link>
                        <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                        <Link className="nav-link" to="/Health">Health</Link>
                        <Link className="nav-link" to="/Science">Science</Link>
                        <Link className="nav-link" to="/Sports">Sports</Link>
                        <Link className="nav-link" to="/Technology">Technology</Link>
                    </div>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
