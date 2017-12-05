import React, { Component } from 'react';

class SkillButton extends Component {
  render(){
    return (
      <button><span>{this.props.skill}</span></button>
    )
  }
}

export default SkillButton;
