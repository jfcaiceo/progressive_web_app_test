import React from "react"
import {MDCDrawer} from "@material/drawer";

class Header extends React.Component {
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
    this.drawer.open = !this.drawer.open;
  }

  render () {
    return (
      <header className="mdc-top-app-bar drawer-top-app-bar" style={{top: '0px'}}>
        <div className="mdc-top-app-bar__row">
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button className="material-icons mdc-top-app-bar__navigation-icon mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
                    style={{MdcRippleFgSize: '28px', MdcRippleFgScale: 1.71429, MdcRippleLeft: '10px', MdcRippleTop: '10px'}}
                    onClick={this.handleClick}>
              menu
            </button>
            <span className="mdc-top-app-bar__title">Beetrack Demo Progressive Web Apps</span>
          </section>
        </div>
      </header>
    );
  }
}

export default Header
