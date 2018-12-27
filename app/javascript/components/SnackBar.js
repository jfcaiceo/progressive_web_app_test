import React from "react"
import {MDCSnackbar} from '@material/snackbar';

class SnackBar extends React.Component {
  componentDidMount() {
    this.snackbar = MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));
    this.snackbar.show({
      message: this.props.message,
      actionText: 'Dismiss',
      actionHandler: () => { this.snackbar.destroy() },
      timeout: 30000
    })
  }

  componentWillUnmount() {
    this.snackbar.destroy()
  }

  render () {
    return (
      <div className="mdc-snackbar"
          aria-live="assertive"
          aria-atomic="true"
          aria-hidden="true">
        <div className="mdc-snackbar__text"></div>
        <div className="mdc-snackbar__action-wrapper">
          <button type="button" className="mdc-snackbar__action-button"></button>
        </div>
      </div>
    )
  }
}

export default SnackBar
