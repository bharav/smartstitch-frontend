import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import HomePageCarousal from './HomePageCarousal';
import RightNavigation from './RightNavigation';
import WhatWeDo from './WhatWeDo';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <div className="container">
          <div className="row">
            <div className="col-sm-8">
            <HomePageCarousal/>
            </div>
            <div className="col-sm-4">
            <RightNavigation/>
            </div>
          </div>
        </div>
       <div className="container text-center">
           <WhatWeDo />
       </div>
       <div>
         <Footer/>
       </div>
    </div>
    );
  }
}

export default App;
