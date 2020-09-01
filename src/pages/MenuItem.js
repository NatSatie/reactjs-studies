import React from 'react';
import {Grid} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

type MenuItemProps = {
  name: string
}

class MenuItem extends React.Component<MenuIemProps> {

  render() {
    const {
      name
    } = this.props;
    return (
      <div>
        <h1> {name} </h1>
      </div>
    );
  }
}

export default MenuItem;
