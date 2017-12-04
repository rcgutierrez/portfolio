import React, { Component } from 'react';
import headshot from '../Images/headshot.jpeg';
import headshot1 from '../Images/headshot1.jpeg';

class Home extends Component {
  render(){
    let raulImg = Math.random()>.5 ? headshot : headshot1;
    return(
      <section className="home-section">
        <div className="content">
          <img src={raulImg} alt="a nice headshot of raul" />
          <article>
            <h2>Welcome!</h2>
          </article>
        </div>
      </section>
    )
  }
}

export default Home;
