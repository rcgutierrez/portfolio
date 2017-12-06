import React, { Component } from 'react';
import Profile from '../Components/Profile';
import profiles from '../utils/profiles';

class Contact extends Component {
  render(){
    let profilesArr = profiles.map((info, index)=> <Profile info={info} key={index} />)
    return(
      <section className="contact-section">
        <div className="content">
          <h2 className="contact-title">Contact Me!</h2>
          <article className="profiles">
            {profilesArr}
          </article>
        </div>
      </section>
    )
  }
}

export default Contact;
