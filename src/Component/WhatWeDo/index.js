import React, { Component } from 'react';

class WhatWeDo extends Component {
    render() {
      return (
      <div>
       <h3>What We Do</h3>
            <br/>
            <div className="row">
                <div className="col-sm-4 horizontal-card">
                    <img src="http://www.prickprock.com/blog/wp-content/uploads/2015/01/Saheli-Couture-Indian-Bridal-Lehenga-Choli-2015-12.jpg" className="img-responsive"  alt="Image"/>
                        <p>Ghagra &amp; Bridal Wear</p>
                        <br/>
                    <img src="http://beautifulhdwallpaper.com/wp-content/uploads/2015/07/Sonarika-Bhadoria-in-stylish-designer-dress.jpg"  alt="Image"/>
                        <p>Suits &amp; Salwar</p>
                </div>
                <div className="col-sm-4 horizontal-card">
                    <img src="http://beautifulhdwallpaper.com/wp-content/uploads/2015/07/Sonarika-Bhadoria-stylish-and-hot-new-wallpapers.jpg" className="img-responsive"  alt="Image"/>
                        <p>Blouses</p>
                        <br/>
                    <img src="https://www.loveyourtailor.ca/images/gallery/wedding-dress-alterations-1-big.jpg" className="img-responsive" alt="Image"/>
                        <p>Alteration</p>
                </div>
                <div className="col-sm-4 vertical-card">
                    <img src="http://www.bargello.com/images/products/women2/3367-L-new-anarkali-dresses.jpg" className="img-responsive" alt="Image"/>
                        <p>Western Wear</p>
                </div>
            </div>
            <hr/>
      </div>
      );
    }
  }
  
  export default WhatWeDo;
  