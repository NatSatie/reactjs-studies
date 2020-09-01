import React from 'react';
//import ReactDOM from 'react-dom';
import {Grid} from 'semantic-ui-react';
import Menu from './Menu';
import MenuItem from './MenuItem';
import {DrinkList} from '../const/drink';
import 'semantic-ui-css/semantic.min.css';

class WelcomePage extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Menu/>
              <MenuItem name={DrinkList[0].name}/>
            </Grid.Column>
            <Grid.Column>
              <p> animation slot </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default WelcomePage;
