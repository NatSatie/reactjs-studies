import React, { useState, useEffect }  from 'react'
import {Menu} from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CoffeeShop from '../study1-coffeeshop/pages/CoffeeShop'
import Log from './Log'
import 'semantic-ui-css/semantic.min.css'

class WelcomePage extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <Menu>
            <Menu.Item>
              <Link to="/info"> About </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/coffee"> Coffee Shop </Link>
            </Menu.Item>
          </Menu>
          <Switch>
            <Route path="/info" component={Log}/>
            <Route path="/coffee" component={CoffeeShop}/>
          </Switch>
        </Router>
      </div>
    )
  }

}

export default WelcomePage
