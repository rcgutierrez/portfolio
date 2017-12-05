import React, { Component } from 'react';
import projects from '../utils/projects';
import Project from './Project';

class Projects extends Component {
  render(){
    let projectsArr = projects.map((project, index)=> <Project project={project} key={index} />);
    return(
      <section className="projects-section">
        <div className="content">
          {projectsArr}
        </div>
      </section>
    )
  }
}

export default Projects;
