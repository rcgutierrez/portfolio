import React, { Component } from 'react';
import smash from '../Images/smash.gif';
import zeroes from '../Images/zeroes.png';
import dooku from '../Images/dooku.png';

class NotFound extends Component {
  constructor(props){
    super(props);

    this.state = {
      image: null
    }
  }

  componentWillMount(){
    let image;
    let num = Math.random();
    if(num<=.33){
      image = smash;
    }else if(num>.33 && num<=.66){
      image = zeroes;
    }else if(num>.66){
      image = dooku;
    }
    this.setState({image: image});
  }

  render(){
    return (
      <section className="not-found">
        <img src={this.state.image} alt="not found" />
        <h2>page not found</h2>
      </section>
    )
  }
}

export default NotFound;
