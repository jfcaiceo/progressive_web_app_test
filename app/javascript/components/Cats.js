import React from "react"
import ImageList from "./ImageList";
import Image from "./Image";
import Loader from "./Loader";
import SnackBar from "./SnackBar";

class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.renderData = this.renderData.bind(this);
    this.state = {
      cats: [],
      fromCache: false
  };
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch('/api/cats')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          ...this.state,
          ...json
        });
      })
      .catch((error) => {
        console.log('error')
      })
  }

  renderData() {
    return (
      this.state.cats.map((cat, i) => {
        return (
          <Image url={cat.photo}
                 label={cat.name}
                 key={i}/>
        )
      })
    )
  }

  render () {
    let snackbar;
    if(this.state.fromCache) {
      snackbar = (
        <SnackBar message={`No internet connection. Retrived from cache at ${(new Date(this.state.timestamp)).toLocaleTimeString()}`}/>
      )
    }
    return (
      <React.Fragment>
        <ImageList>
          { 
            (this.state.cats.length > 0 ? this.renderData() : <Loader />)
          }
        </ImageList>
        { snackbar }
      </React.Fragment>
    )
  }
}

export default Cats