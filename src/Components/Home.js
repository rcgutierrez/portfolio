import React, { Component } from 'react';
import headshot from '../Images/headshot.jpeg';

class Home extends Component {
  render(){
    return(
      <section>
        <img src={headshot} />
      </section>
    )
  }
}

export default Home;
