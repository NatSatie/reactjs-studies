import React from 'react';
import {Grid} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import americano from '../img/americano.jpg';
import caffeLatte from '../img/caffeLatte.jpg';
import caffeMocha from '../img/caffeMocha.jpg';
import cappuccino from '../img/cappuccino.jpg';
import expresso from '../img/expresso.jpg';
import expressoMacchiato from '../img/expressoMacchiato.jpg';

type ImageSlotProps = {
  name: string,
  img: string
}

class ImageSlot extends React.Component<ImageSlotProps>{

  switch(name){
    //TODO: FIX SWITCH CASE
    // switch(name){
    //   case 'Expresso':
    //     return '../img/expresso.jpg';
    //   case 'americano :
    //     return '../img/expresso.jpg';
    //   case 'caffeLatte':
    //     return '../img/expresso.jpg';
    //   case 'caffeMocha':
    //     return '../img/expresso.jpg';
    //   case 'cappuccino':
    //     return cappuccino;
    //   case 'expressoMacchiato':
    //     return expressoMacchiato;
    //   default:
    //     return expresso;
    // }
  }

  render() {
    const {
      name,
      img
    } = this.props;
    return (
      <div>
        <h1> {name} </h1>
        <img src={this.switch(name)}/>
      </div>
    );
  }
}

export default ImageSlot
