import React from "react"
import { Switch, Route } from 'react-router-dom'
import Dogs from "./Dogs";
import Cats from "./Cats";

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Dogs}/>
        <Route path='/dogs' component={Dogs}/>
        <Route path='/cats' component={Cats}/>
      </Switch>
    )
  }
}

export default Main