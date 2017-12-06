import React, { Component } from 'react';
import Entry from './Entry';
import entries from '../utils/entries';
import resume from '../Images/Raul Gutierrez Resume.pdf';

class About extends Component {
  render(){
    let entryArr = entries.map((entry, index)=> <Entry entry={entry} />)
    return(
      <section className="about-section">
        <p className="subscript">
          <a href={resume} download="Raul Gutierrez Resume.pdf">(Download Resume Here)</a>
        </p>
        <div className="timeline">
          <div className="entries">
            {entryArr}
          </div>
        </div>
      </section>
    )
  }
}

export default About;
