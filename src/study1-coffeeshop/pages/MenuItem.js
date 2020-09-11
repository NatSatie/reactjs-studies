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
      <div class='menu-item' style={
        {
          'padding': '10px'
        }
      }>
        <h4 class='menu-item-name' > {name} </h4>
      </div>
    );
  }
}

export default MenuItem;
