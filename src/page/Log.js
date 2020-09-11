import React, { useState, useEffect }  from 'react'
import 'semantic-ui-css/semantic.min.css'
import {StudyInformation} from './information'

class Log extends React.Component {
  render() {
    return (
      <div>
        {
          StudyInformation.map( p => (
            <div>
              <h1 style={
                {
                  'text-align': 'center'
                }
              }> {p.name} </h1>
              <h5 > {p.description} </h5>
            </div>
          ))
        }
      </div>
    )
  }

}

export default Log
