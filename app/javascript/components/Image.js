import React from "react"

class Image extends React.Component {
  render () {
    return (
      <li className="mdc-image-list__item">
        <div className="mdc-image-list__image-aspect-container">
          <img className="mdc-image-list__image" src={this.props.url} />
        </div>
        <div className="mdc-image-list__supporting">
          <span className="mdc-image-list__label">{this.props.label}</span>
        </div>
      </li>
    )
  }
}

export default Image