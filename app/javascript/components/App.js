
import React from "react"
import Header from "./Header";
import Drawer from "./Drawer";
import Main from "./Main";

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Drawer/>
        <div className="mdc-drawer-app-content">
          <Header/>
          <div className="drawer-main-content">
            <div className="mdc-top-app-bar--fixed-adjust" />
            <Main/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default App