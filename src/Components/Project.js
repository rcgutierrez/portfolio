import React, { Component } from 'react';

class Project extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: this.props.project[0],
      image: this.props.project[1],
      description: this.props.project[2],
      upNext: this.props.project[3]
    }
  }

  render(){
    return(
      <article className="project-article">
        <div className="project-img">
          {this.state.image}
        </div>
        <div className="project-info">
          <h2>{this.state.title}</h2>
          <p><em><strong>Description:</strong></em></p>
          <p>{this.state.description}</p>
          <p><em><strong>Coming Up:</strong></em></p>
          <p>{this.state.upNext}</p>
        </div>
      </article>
    )
  }
}

export default Project;
