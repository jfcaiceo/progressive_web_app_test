import React from "react"
import { Link } from 'react-router-dom'

class Drawer extends React.Component {
  render () {
    const path = window.location.pathname
    const dogActive = path === '/dogs' || path === '/'
    const catActive = path === '/cats'
    return (
      <aside className="mdc-drawer mdc-drawer--dismissible">
        <div className="mdc-drawer__content">
          <nav className="mdc-list">
            <Link className={`mdc-list-item ${dogActive ? 'mdc-list-item--activated' : ''}`} to='/dogs'>
              <i className="material-icons mdc-list-item__graphic" aria-hidden="true">pets</i>
              <span className="mdc-list-item__text">Dogs</span>
            </Link>
            <Link className={`mdc-list-item ${catActive ? 'mdc-list-item--activated' : ''}`} to='/cats'>
              <i className="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>
              <span className="mdc-list-item__text">Cats</span>
            </Link>
          </nav>
        </div>
      </aside>
    );
  }
}

export default Drawer
