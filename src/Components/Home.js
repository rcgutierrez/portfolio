import React, { Component } from 'react';
import headshot from '../Images/headshot.jpeg';
import headshot1 from '../Images/headshot1.jpeg';
import SkillButton from '../Components/SkillButton';
import welcomes from '../utils/welcomes';
import skills from '../utils/skills';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      welcome: null,
      subscriptShowing: false
    }
  }

  componentWillMount(){
    Math.random() > .65 ?
      this.setState({welcome: "Welcome"}) :
      this.setState({welcome: welcomes[(Math.floor(Math.random()*welcomes.length))], subscriptShowing: true});
  }

  render(){
    let skillsArr = skills.map((skill, index)=> <SkillButton skill={skill} key={index} />)
    return(
      <section className="home-section">
        <div className="content">
          <img src={Math.random()>.5 ? headshot : headshot1} alt="a nice headshot of raul" />
          <article>
            <h2 className="welcome">{this.state.welcome}!</h2>
            <p className="subscript" style={{visibility: this.state.subscriptShowing ? "visible" : "hidden"}}>(Welcome!)</p>
            <p>ATX | Full-Stack Developer | General Enthusiast</p>
            <div className="skills">{skillsArr}</div>
          </article>
        </div>
      </section>
    )
  }
}

export default Home;
