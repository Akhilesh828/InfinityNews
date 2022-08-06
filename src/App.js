import './App.css';
import React, { Component } from 'react';  // rcc
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoadingBar from "react-top-loading-bar";


class App extends Component {
  apikey = process.env.apikey;

  render() {
    return (
      <div className='color'>
        <Router>
          <Navbar />
          {/* <LoadingBar color="blue"
          progress={progress} onLoaderFinished={()=> setProgress(0)}/> */}
          <Routes>         
            <Route exact path="/general" element={<News apikey={this.apikey} key="general" pageSize={30} country="in" category="general" />} />
            <Route exact path="/" element={<News apikey={this.apikey} key="home" pageSize={15} country="in" category="general" />} />
            <Route exact path="/technology" element={<News apikey={this.apikey} key="technology" pageSize={30} country="in" category="technology" />} />
            <Route exact path="/business" element={<News apikey={this.apikey} key="business" pageSize={30} country="in" category="business" />} />
            <Route exact path="/health" element={<News apikey={this.apikey} key="health" pageSize={30} country="in" category="health" />} />
            <Route exact path="/science" element={<News apikey={this.apikey} key="science" pageSize={30} country="in" category="science" />} />
            <Route exact path="/sports" element={<News apikey={this.apikey} key="sports" pageSize={30} country="in" category="sports" />} />
            <Route exact path="/entertainment" element={<News apikey={this.apikey} key="entertainment" pageSize={30} country="in" category="entertainment" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

