import React, { Component } from "react";
import {
  Link
} from "react-router-dom";


class Main extends Component {
  render() {
    return (
      // <HashRouter>
      <div>
        <div>
          <h1 className="blog-heading">My blog posts</h1>
        </div>
        <div className="blog-posts">
          <div className="post">
            <Link to="/Nyc">
              <img className="blog-post-image" src={require('./images/ny.jpg')}></img>
            </Link>
            <Link to="/nyc" className="title-link">
              <h1 className="post-title">I Love New York City!</h1>
            </Link>
            <div className="center"><time datetime="2019-10-06">Oct 06, 2019</time></div>
            <p>
             Quite simply, I was in love with New York. I do not mean 'love' in any colloquial way, I mean that I was in love with the city.
            <Link to="/nyc">
                More
            </Link>
            </p>
          </div>
          <div className="post">
            <Link to="/stevejobs">
              <img className="blog-post-image" src={require('./images/steve-jobs.jpg')}></img>
            </Link>
            <Link to="/stevejobs" className="title-link">
              <h1 className="post-title">Steve Jobs - My Role Model</h1>
            </Link>
            <div className="center"><time datetime="2019-11-01">Nov 01, 2019</time></div>
            <p>
            Steve Jobs is my role model and my idol too. He once said "Let's go invert tomorrow rather than worrying about what happened yesterday".
            <Link to="/stevejobs">
                More
            </Link>
            </p>
          </div>
          <div className="post">
            <Link to="/adobe">
              <img className="blog-post-image" src={require('./images/adobe.jpg')}></img>
            </Link>
            <Link to="/adobe" className="title-link">
              <h1 className="post-title">Adobe - My Dream Company</h1>
            </Link>
            <div className="center"><time datetime="2019-11-15">Nov 15, 2019</time></div>
            <p>
              Only Adobe gives everyone — from emerging artists to global brands — everything they need to design and deliver exceptional digital experiences
            <Link to="/adobe">
                More
            </Link>
            </p>
          </div>
          <div className="clear-fix">
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
