import React, { Component } from 'react';


class RightNavigation extends Component {
    render() {
      return (
      <div>
      <div className="well">
                        <p><a href="#">Who are we</a></p>
                    </div>
                    <div className="well">
                        <p><a href="#">Latest Launches</a></p>
                    </div>
                    <div className="well">
                        <p><a href="#">Visit Our Blog</a></p>
                    </div>
                    <div className="well">
                        <p><a href="#">Stores</a></p>
                    </div>
      </div>
      );
    }
  }
  
  export default RightNavigation;
  