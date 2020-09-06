import React, { useState, useEffect }  from 'react';
//import ReactDOM from 'react-dom';
import {Grid} from 'semantic-ui-react';
import Menu from './Menu';
import MenuItem from './MenuItem';
import ImageSlot from './ImageSlot';
import {DrinkList} from '../const/drink';
import 'semantic-ui-css/semantic.min.css';

const WelcomePage = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Menu/>
            {
              DrinkList.map( d => (
                <MenuItem name={d.name} onClick={() => setIndex(d.index)}/>
              ))
            }
          </Grid.Column>
          <Grid.Column>
            <p> animation slot </p>
            <ImageSlot name={DrinkList[index].name} img={DrinkList[index].img}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default WelcomePage;
