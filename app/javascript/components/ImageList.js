import React from "react"

class ImageList extends React.Component {
  render () {
    return (
      <ul className="mdc-image-list standard-image-list mdc-image-list--with-text-protection">
        { this.props.children }
      </ul>
    )
  }
}

export default ImageList