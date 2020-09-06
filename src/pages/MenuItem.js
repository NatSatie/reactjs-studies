import React from 'react';
import {Grid} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

type MenuItemProps = {
  name: string
}

class MenuItem extends React.Component<MenuIemProps> {

  handleClick(){
    console.log("AI!");
  }

  render() {
    const {
      name
    } = this.props;
    return (
      <div>
        <button onClick={this.handleClick}> {name} </button>
      </div>
    );
  }
}

export default MenuItem;
