import React from 'react';
import ReactDOM from 'react-dom';

class WelcomePage extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div id="divWelcome">
          <h1>
            Welcome user, would you like a coffee?
          </h1>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
