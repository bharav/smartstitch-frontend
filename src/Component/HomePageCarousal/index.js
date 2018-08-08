import React, { Component } from 'react';
import './HomePageCarousal.css';

class HomePageCarousal extends Component {
    render() {
      return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
        
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
        </ol>
        
        
        <div className="carousel-inner" role="listbox">
            <div className="item active">
                <img src="https://mastorat.com/wp-content/uploads/2016/10/Pakistani-Bridal-Lehenga-Dresses-Designs-Collection-of-2016.jpg" alt="Image" />
                    <div className="carousel-caption">
                        <h3>Smart Stich</h3>
                        <p>Let us design your wardrobe</p>
                    </div>
                    
                </div>
            
            <div className="item">
                <img src="http://blog.seasonsway.com/wp-content/uploads/2016/03/Latest-Kurti-Tunics-By-CBAZAAR-Banner-www.Fashionhuntworld.Blogspot.com_.jpg" alt="Image"/>
                    <div className="carousel-caption">
                        <h3>lorem ipsum 1</h3>
                        <p>lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>
            </div>
        </div>
        
        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
      );
    }
  }
  
  export default HomePageCarousal;
  