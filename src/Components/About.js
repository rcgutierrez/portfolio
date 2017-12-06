import React, { Component } from 'react';
import Entry from './Entry';
import entries from '../utils/entries';

class About extends Component {
  render(){
    let entryArr = entries.map((entry, index)=> <Entry entry={entry} />)
    return(
      <section className="about-section">
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
