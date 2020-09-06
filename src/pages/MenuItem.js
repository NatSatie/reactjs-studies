import React from 'react';
import {Grid} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

type MenuItemProps = {
  name: string,
  selected: boolean
}

class MenuItem extends React.Component<MenuIemProps> {

  handleClick(){
    console.log('clicked');
  }

  render() {
    const {
      name,
      selected
    } = this.props;
    return (
      <div>
        <button onClick={() => (
            this.handleClick()
        )}> {name} </button>
      </div>
    );
  }
}

export default MenuItem;
