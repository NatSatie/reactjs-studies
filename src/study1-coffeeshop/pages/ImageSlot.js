import React from 'react';
import {Grid} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

type ImageSlotProps = {
  imgAddress: string[],
  drinkName: string[],
  heightSize: string,
  widthSize: string
};

const ImageSlot = ({imgAddress ,drinkName, heightSize, widthSize}: ImageSlotProps) => {
  return (
      <div className="slide-container" >
        <Slide autoplay={true} arrows={false} duration={5000} easing={'cubic'} transitionDuration={800}>
          {
            imgAddress.map( p => (
              <div className="each-slide">
                <div style={{
                    'backgroundImage': `url(${p})`,
                    'background-size': 'contain',
                    height: heightSize,
                    width: widthSize
                  }}>
                  <h1 style={{color:'white'}}> Drink_Name </h1>
                  <h3 style={{color:'white', align: 'left'}}> Preço </h3>
                  <h5 style={{color:'white', align: 'left'}}> Ingredientes </h5>
                </div>
              </div>
            ))
          }
        </Slide>
      </div>
    )
}

export default ImageSlot
