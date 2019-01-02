import React from "react"
import { Link } from 'react-router-dom'
import {MDCDrawer} from "@material/drawer";

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'))
  }

  componentWillUnmount() {
    this.drawer.destroy();
  }

  handleClick() {
    this.drawer.open = false;
  }

  render () {
    const path = window.location.pathname
    const dogActive = path === '/dogs' || path === '/'
    const catActive = path === '/cats'
    return (
      <React.Fragment>
        <aside className="mdc-drawer mdc-drawer--modal">
          <div className="mdc-drawer__content">
            <nav className="mdc-list">
              <Link className={`mdc-list-item ${dogActive ? 'mdc-list-item--activated' : ''}`} to='/dogs' onClick={this.handleClick}>
                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">pets</i>
                <span className="mdc-list-item__text">Dogs</span>
              </Link>
              <Link className={`mdc-list-item ${catActive ? 'mdc-list-item--activated' : ''}`} to='/cats' onClick={this.handleClick}>
                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>
                <span className="mdc-list-item__text">Cats</span>
              </Link>
            </nav>
          </div>
        </aside>
        <div className="mdc-drawer-scrim"></div>
      </React.Fragment>
    );
  }
}

export default Drawer
