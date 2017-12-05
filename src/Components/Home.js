import React, { Component } from 'react';
import headshot from '../Images/headshot.jpeg';
import headshot1 from '../Images/headshot1.jpeg';
import welcomes from '../welcomes';
class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      welcome: null,
      subscriptShowing: false
    }
  }

  componentWillMount(){
    Math.random() > .6 ?
      this.setState({welcome: "Welcome"}) :
      this.setState({welcome: welcomes[(Math.floor(Math.random()*welcomes.length))], subscriptShowing: true});
  }

  render(){

    console.log(welcomes[10]);
    let raulImg = Math.random()>.5 ? headshot : headshot1;
    return(
      <section className="home-section">
        <div className="content">
          <img src={raulImg} alt="a nice headshot of raul" />
          <article>
            <h2>{this.state.welcome}!</h2>

          </article>
        </div>
      </section>
    )
  }
}

export default Home;
