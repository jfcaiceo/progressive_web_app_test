import React from "react"
import { Link } from 'react-router-dom'

class AddButton extends React.Component {
  render () {
    return (
      <button className="mdc-fab app-fab--absolute" onClick={this.props.onClick}>
        <span className="material-icons mdc-fab__icon">add</span>
      </button>
    )
  }
}

export default AddButton