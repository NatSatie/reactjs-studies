import React from 'react';
import {Grid} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

type MenuItemProps = {
  name: string,
  selected: boolean
}

class MenuItem extends React.Component<MenuIemProps> {

  render() {
    const {
      name,
      selected
    } = this.props;
    return (
      <div>
        <h4> {name} </h4>
      </div>
    );
  }
}

export default MenuItem;
