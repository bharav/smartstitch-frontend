import React, { Component } from 'react';
import "./header.css"

class Header extends Component {
    render() {
      return (
          <div>
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#"><img src="https://vivtestfunctionstorage.blob.core.windows.net/smartstitchimages/logo.png" className="stitchlogo"/></a>
                </div>
                <div className="collapse navbar-collapse pull-right" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Our Creation</a></li>
                        <li><a href="#">Store</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
      );
    }
  }
  
  export default Header;
  