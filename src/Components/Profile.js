import React, { Component } from 'react';

class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {
      url: this.props.info[0],
      link: this.props.info[1],
      image: this.props.info[2]
    }
  }

  render(){
    return(
      <div className="profile">
        <div>
          {this.state.image}
        </div>
        <div>
          <a href={this.state.link} target="_blank" rel="noopener noreferrer"><h2>{this.state.url}</h2></a>
        </div>
      </div>
    )
  }
}

export default Profile;
