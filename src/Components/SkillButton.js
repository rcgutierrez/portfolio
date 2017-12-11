import React, { Component } from 'react';

class SkillButton extends Component {
  render(){
    let link = this.props.skill[1] ?
      <a href={this.props.skill[1]} target="_blank" rel="noopener noreferrer"><span>{this.props.skill[0]}</span></a> :
      <a href="https://github.com/rcgutierrez" target="_blank" rel="noopener noreferrer"><span>{this.props.skill[0]}</span></a>
    return (
      <button>{link}</button>
    )
  }
}

export default SkillButton;
