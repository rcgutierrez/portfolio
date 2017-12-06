import React, { Component } from 'react';

class Entry extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: this.props.entry[0],
      role: this.props.entry[1],
      time: this.props.entry[2],
      descr: this.props.entry[3],
      skills: this.props.entry[4],
      location: this.props.entry[5]
    }
  }

  render(){
    return(
      <div className="entry">
        <h2>{this.state.title}</h2>
        <h5>{this.state.role}</h5>
        <p className="entry-info">{this.state.descr}</p>
        <p className="entry-skills">skills learned: {this.state.skills}</p>
        <br />
        <h5>{this.state.location}</h5>
        <h5>{this.state.time}</h5>
        <br />
      </div>
    )
  }
}

export default Entry;
