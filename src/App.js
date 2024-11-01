import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API
  state= {
    progress : 0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress = {this.setProgress}apikey = {this.apikey} country="us"/>}/>
          <Route exact path="/General" element={<News setProgress = {this.setProgress}apikey = {this.apikey} key="general"country="us" category="General"/>}/>
          <Route exact path="/Business" element={ <News setProgress = {this.setProgress} apikey = {this.apikey}key="Business"country="us" category="Business"/>}/>
          <Route exact path="/Entertainment" element={<News setProgress = {this.setProgress} apikey = {this.apikey}key="Entertainment"country="us" category="Entertainment"/>}/>
          <Route exact path="/Health" element={ <News setProgress = {this.setProgress}apikey = {this.apikey} key="Health"country="us" category="Health"/>}/>
          <Route exact path="/science" element={<News setProgress = {this.setProgress}apikey = {this.apikey} key="science"country="us" category="science"/>}/> 
          <Route exact path="/Sports" element={<News setProgress = {this.setProgress} apikey = {this.apikey}key="Sports"country="us" category="Sports"/>}/>
          <Route exact path="/Technology" element={<News setProgress = {this.setProgress}apikey = {this.apikey} key="Technology"country="us" category="Technology"/>}/>         
        </Routes>
      </div>
    )
  }
}

