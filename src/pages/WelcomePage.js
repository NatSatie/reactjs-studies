import React, { useState, useEffect }  from 'react'
//import ReactDOM from 'react-dom';
import {Grid} from 'semantic-ui-react'
import MenuItem from './MenuItem'
import ImageSlot from './ImageSlot'
import {DrinkList1, DrinkList2} from '../const/drink'
import 'semantic-ui-css/semantic.min.css'
import americano from '../img/americano.jpg'
import caffeLatte from '../img/caffeLatte.jpg'
import caffeMocha from '../img/caffeMocha.jpg'
import cappuccino from '../img/cappuccino.jpg'
import expresso from '../img/expresso.jpg'
import expressoMacchiato from '../img/expressoMacchiato.jpg'
import '../const/style.css'

const drinkChosen = React.createContext(0)

class WelcomePage extends React.Component {

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <div style={{height:'47vh'}}>
                <h1 id='title'> Menu </h1>
                {
                  DrinkList1.map( d => (
                    <MenuItem name={d.name}/>
                  ))
                }
              </div>
              <ImageSlot
                imgAddress={[expresso, caffeLatte]}
                drinkName={['Expresso', 'Caffe Latte']}
                heightSize='50vh'
                widthSize='50vw'
              />
            </Grid.Column>
            <Grid.Column>
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <div style={{width:'35vw'}}>
                      {
                        DrinkList2.map( d => (
                          <MenuItem name={d.name}/>
                        ))
                      }
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <ImageSlot
                      imgAddress={[caffeMocha, expressoMacchiato]}
                      drinkName={['Caffe Mocha', 'Expresso Macchiato']}
                      heightSize='69vh'
                      widthSize='15vw'
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <ImageSlot
                imgAddress={[expressoMacchiato, expresso]}
                drinkName={['Expresso Macchiato', 'Expresso']}
                heightSize='28vh'
                widthSize='50vw'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }

}

export default WelcomePage
